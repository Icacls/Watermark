import U from './utils';

class Watermark {
  constructor(employee) {
    if (employee === undefined) {
      this.set();
    } else {
      this.set(employee);
    }
    this.mount();
    this.canvas = null;
    this.background = '';
  }

  /**
   * [calculate ctx -> draw canvs -> render]
   * @return {[type]} [description]
   */
  draw() {
    if (U.isNode(this.$el) && !U.isNull(this.options)) {
      this.init();
      this.drawCanvas();

      if (this.options.auto) {
        this.render();
      }
      if (this.options.observe) {
        this.observe();
      }
    }
    return this;
  }

  /**
   * whitch element will display watermark
   * @param {String | HTMLElement} el
   * @return this
   */
  mount() {
    this.$el = document.querySelector('body');
    return this;
  }

  /**
   * unmount element
   */
  unMount() {
    this.$el = null;
    return this;
  }

  /**
   * set watermark style
   * @param {Object} options
   * @return this
   */
  set(employee = {}) {
    // eslint-disable-next-line no-param-reassign
    const dateStr = U.getNowFormatDate();
    const mark = `ID: ${employee.id || '100034'}/${employee.name || 'Example'}/${dateStr}`;
    const options = {
      textArray: ['example'],
      textInfo: mark,
      fontSize: 15,
      fontFamily: 'serif',
      padding: 25,
      lineHeight: -1,
      rotate: 25,
      fontScale: 1,
      color: 'rgba(0, 0, 0, 0.2)',
      auto: true,
      observe: true,
    };
    this.options = options;
    return this;
  }

  /**
   * initialize watermark style
   */
  init() {
    this.initFont(); // 必须先初始化字体
    this.initSize(); // 然后计算画布大小
  }

  /**
   * 初始化字体，计算行高
   */
  initFont() {
    const { options } = this;
    this.options.font = `${options.fontSize}px ${options.fontFamily}`;

    if (options.lineHeight === -1) {
      this.options.lineHeight = 2.5 * options.fontSize;
    }
  }

  /**
   * 计算画布大小
   */
  initSize() {
    const { options } = this;

    // max length of text array
    /* const maxLength = options.textArray.reduce((max, current) => {
      const currentLength = U.length(current, options.fontScale);
      return currentLength > max ? currentLength : max;
    }, 0); */

    const maxLength = U.length(options.textInfo, options.fontScale);
    // 内容宽高
    const W = maxLength * options.fontSize + options.padding * 2;
    const H = options.lineHeight + options.padding * 2;

    const a = Math.abs(options.rotate); // 角度
    // 画布宽高context width => cW, context height => cH
    const ctxW = H * Math.sin(a) + W * Math.cos(a);
    const ctxH = H * Math.cos(a) + W * Math.sin(a);

    this.contentWidth = W;
    this.contentHeight = H;
    this.ctxWidth = 300 || Math.abs(Math.floor(ctxW)) + 150;
    this.ctxHeight = 300 || Math.floor(ctxH) + 80;
  }

  drawCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = this.ctxWidth;
    canvas.height = this.ctxHeight;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const { options } = this;
      // ctx.translate(...this.origin(options.rotate));
      // ctx.rotate(options.rotate);
      ctx.rotate(-30 * Math.PI / 180);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'Middle';
      ctx.font = options.font;
      ctx.fillStyle = options.color;
      const H = this.contentHeight; // 内容高度
      const a = Math.abs(options.rotate); // 旋转角度
      const offsetX = H * Math.cos(a) * Math.sin(a);

      /**
       * 第四象限
       * offsetY = H * Math.sin(a) * Math.sin(a)
       *
       * 第一象限
       * offsetX = H * Math.cos(a) * Math.cos(a)
       *
       * 因此，当 -PI/2 < rotate < PI/2 时
       * (PI/2 + rotate) % PI/2 的值计算正弦值，刚好符合上式
       * 例如，roate = 30, (90 + 30) % 90 = 30, sin(30) = 1/2
       * rotate = -30, (90 + (-30)) % 30 = 60, cos(60) = sin(30)
       */
      const halfPI = Math.PI / 2;
      const tmp = (halfPI + options.rotate) % halfPI;
      const offsetY = H * Math.sin(tmp) * Math.sin(tmp);
      /* options.textArray.forEach((text, i) => {
        const x = offsetX + options.padding;
        const y = i * options.lineHeight + offsetY + options.padding;
        ctx.fillText(text, x, y);
      }); */

      const x = offsetX + options.padding;
      const y = options.lineHeight + offsetY + options.padding;
      ctx.fillText(options.textInfo, x, y);
      this.canvas = canvas;
    }
  }

  /**
   * 获取坐标原点
   * @param {*} rotate 设置的水印旋转角度
   */
  origin(rotate) {
    let origin = [0, 0]; // 第四象限，定义左上角为坐标原点
    if (rotate < 0 && rotate > -Math.PI / 2) { // 第一象限，定义左下角为坐标原点
      origin = [0, this.ctxHeight];
    }
    return origin;
  }

  /**
   * 绘制。添加背景到指定节点上
   */
  render() {
    const dataUrl = this.canvas.toDataURL();
    if (dataUrl) {
      this.$el.style.background = `url(${dataUrl})`;
    } else {
      this.$el.style.background = '';
    }
    this.background = this.$el.style.background;
    return this;
  }


  /**
   * 检测节点背景是否发生变化。
   */
  observe() {
    if (this.observer) {
      // remove observer
      this.observer.disconnect();
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const { target } = mutation;
        // 检测背景是否与设置的水印相同
        if (target.style.background !== this.background) {
          target.style.background = this.background;
        }
      });
    });

    observer.observe(this.$el, {
      attributes: true,
      childList: false,
      attributeFilter: ['style'],
    });
    this.observer = observer;
    return this;
  }

  /**
   * clear watermark
   */
  destory() {
    if (U.isNode(this.$el)) {
      this.$el.style.background = '';
    }
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observer = null;
    this.unMount();
    this.set();
  }
}

export default Watermark;
