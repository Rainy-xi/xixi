# rem概念
- rem可以在用户浏览网页时，根据屏幕尺寸，来向用户展示更适合用户的布局、文字、图片、按钮
- rem（font size of the root element）是指相对于根元素的字体大小的单位
- 一旦根节点html 定义的font-size变化，那么整个网页中运用到rem的也会随之变化
# 使用
- 浏览器的默认字体高都是16px，所有未经调整的浏览器都符合：1rem=16px.那么12px=0.75rem,10px=0.625rem
- 重新计算那些被放大的字体rem数值，避免字体大小的重复声明
- 目前PC端开始普遍使用rem，移动端基本完全使用
# 工具
https://www.twle.cn/static/tool/px2rem.html
px转rem工具
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            html{
                font-size:16px;/*1rem=16px*/
                font-size:20px;/*1rem=20px*/
            }
            #box1{
                /*width:300px;
                height:200px;*/
                width:18.75rem;
                height:12.5rem;
                background-color:red;
            }
            #box2{
                /*width:100px;
                height:200px;*/
                width:6.25rem;
                height:12.5rem;
                background-color:green;
            }
        </style>
    </head>
    <body>
        <div id="box1">box1</div>
        <div id="box2">box2</div>
    </body>
</html>
```