import U from '../src/utils'; 
import Watermark from '../src/Watermark';

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};
const dateStr = U.getNowFormatDate();
const defaultOptions = {
  textArray: ['example'],
  textInfo: `ID: 100034/Example/${dateStr}`,
  fontSize: 15,
  fontFamily: 'serif',
  padding: 25,
  lineHeight: -1,
  rotate: 25,
  fontScale: 1,
  color: 'rgba(0, 0, 0, 0.2)',
  observe: true,
  auto: true,
};

beforeEach(() => {
  const body = document.body;
  body.style.background = '';
});


describe('test mount', () => {

  test('test selector', () => {
    const watermark = new Watermark();
    watermark.mount();
    expect(watermark.$el).toEqual(document.body);
  });

});

describe('test set', () => {
  test('test set default', () => {
    const watermark = new Watermark();
    watermark.set();
    expect(watermark.options).toEqual(defaultOptions);
  });

  test('test set empty object', () => {
    const watermark = new Watermark();
    expect(watermark.set({}).options).toEqual(defaultOptions);
  });

  test('test set value', () => {
    const watermark = new Watermark();
    const textInfo = 'test';
    watermark.set(textInfo);
    expect(textInfo).toEqual('test');
  });
});

describe('test draw', () => {
  test('draw after mount', () => {
    const watermark = new Watermark();
    watermark.mount().draw();
    expect(watermark.background).not.toBe('');
    expect(watermark.canvas).toBeInstanceOf(HTMLCanvasElement);
  });
});


describe('test destory', () => {
  test('test destory directly', () => {
    const watermark = new Watermark();
    watermark.destory();
    expect(watermark.observer).toBeNull();
    expect(watermark.options).toEqual(defaultOptions);
  });

});
