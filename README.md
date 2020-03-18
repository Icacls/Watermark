# Watermark


# Introduction

简单的页面水印工具，默认挂载到document.body上

```javascript
new Watermark().set('').draw().destory();
```

```javascript
const watermark = new Watermark({name: '罗海', id: '10001'}).draw();
```

# 开始使用

## 安装

```console
npm install page-watermark --registry http://192.168.13.184:4873 --save
```

## API

### constructor([el][, options])
- *参数:*
    ```
      employee {Object} [{...}]      雇员信息
        id     {Number} [10001]      工号
        name   {String} ['test001']    姓名
    ```
- *实例:*
    - ```javascript
      new Watermark();
      ```
    - ``` javascript
      new Watermark({name: 'test001', id: '10001'});
      ```
- *注意:*
   
    示例代码: 
    ```javascript

      /*
       * use api
       */
      const watermark = new Watermark();
      // ... do some action
      watermark.draw();
      // you can access canvas by watermark.canvas properity
      watermark.render();   // must after draw call
    ```
    ```javascript

      /*
       * use pure js
       */
      const watermark = new Watermark();
      watermark.draw();
      const canvas = watermark.draw().canvas;
      const dataUrl = canvas.toDataURL();
      const body = document.body;
      body.style.background = `url(${dataUrl})`;
    ```

### mount()

- *使用:*
    
   挂载水印到页面上

- *示例代码:*
    - ```javascript
      const watermark = new Watermark(); // create a instance of Watermark
      watermark.mount();  // mount to document.body
      // watermark.draw();  // dont fotget to use draw() to display watermark on mounted element
      ```

### set(options)

- *Arguments:*
    ```
      employee {Object} [{...}]      雇员信息
        id     {Number} [10001]      工号
        name   {String} ['test001']    姓名
    ```

- *使用:*

    It's default value is same as `constructor`
    You can use `set` function to re-configurate watermark style

- *示例代码:*
    - ```javascript
        const watermark = new Watermark();
        // if you want to re-configurate
        watermark.set({
          id: '10001'
          name: 'test001', 
        });
        // watermark.draw();  must use draw() to display
      ```

### draw()

- *使用:*

    use this function to render watermark on the mounted element.

- *示例代码:*
    - ```javascript
      new Watermark().draw();
      ```
    - ```javascript
      new Watermark().set().mount().draw();
      ```
    - ```javascript
      new Watermark().set().draw();
      ```
      
### destory()

- *使用:*

    - unmount element
    - disconnect mutation observer
    - change options to default value

- *示例代码:*
    - ```javascript
      new Watermark().set().mount().destory();
      ```



