# CSS常见属性
-  CSS里面有N多属性，根据继承性主要可以分为两大类
## 可继承属性
- 父标签的属性值会传递给子标签
- 一般是文字控制属性
## 不可继承属性
- 父标签的属性值不能传递给子标签
- 一般是区块控制属性
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            #box{
                width:200px;
                height:200px;
                background-color:red;<!--父标签的高度宽度背景颜色子标签不会继承-->
                color:yellow;<!--字体颜色会被继承-->
                text-align:center;<!--字体居中会被继承-->
                line-height:30px;<!--垂直居中会被继承-->
                font-size:30px;<!--字体大小会被继承-->
            }
        </style>
    </head>
    <body>
        <div id="box">
            <span>111</span>
            <p>222</p>
            <div>333</div>
        </div>
    </body>
</html>

```
# 要掌握的属性
## 1.visibility&display
- 规定元素是否可见
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            div{
                width:200px;
                height:200px;
                background-color:red;
                <!--visibility属性规定元素是否可见-->
                <!--visibility:visible--><!--可见默认是-->
                visibility:hidden;<!--不可见，但空间依然占用-->
                display:none;<!--不可见，且空间不占用-->
                cursor:pointer<!--显示光标的类型为手指-->
            }
            p{
                background-color:green;
            }
        </style>
    </head>
    <body>
        <div>111</div>
        <p>2222</p>
    </body>
</html>
```
## 2.cursor
手指的显示，规定显示光标的类型
- cursor:pointer显示光标的类型为手指
- a标签默认是手指
- cursor:move显示光标类型为可移动
- cursor:crosshair显示光标类型为十字可绘制
- cursor:text显示文本
- cursor:wait显示系统正忙（通常是一只表或沙漏）
- cursor:help显示光标指示可用的帮助（通常是一个问号或气球）
- cursor:default默认光标（通常是一个箭头）

## 3.font
这是一个复合属性
- font-family:Arial,Helvetica,sans-serif对应页面展示的字体，浏览器会优先使用第一个，如果没有找到则使用第二个，以此类推
- font-size：设置字体大小
- font-weight：设置文本粗细；normal默认值，定义标准的字符；bold：定义粗体字符；bolder定义更粗体字符；lighter:定义更细的字符；100，200，300-900：定义由粗到细的字符，400等同于normal700等同于bold；
font-style：指定文本的斜体，定义字体的风格，normal默认值，浏览器显示一个标准的字体样式；italic浏览器会显示一个斜体的字体样式；oblique浏览器会显示一个倾斜的字体样式；inherit规定应该从父元素继承字体样式；

## 4.text-decoration
- text-decoration这个属性允许对文本设置某种效果，如添加下划线。如果后代元素没有自己的装饰，祖先元素上的装饰会“延申”到后代元素中。不要求用户代理支持blink.
- text-decoration:none;去除下划线
- text-decoration:underline;定义文本的下一条线
- text-decoration:overline;定义文本的上一条线
- text-decoration:line-through;定义穿过文本的一条线
- text-decoration:blink;定义闪烁的文本；
- text-decoration:inherit;规定应该从父元素继承text-decoration属性的值
- text-decoration：属性用来规定添加到文本的修饰；注意：修饰的颜色由"color"属性设置

## 5.text-indent
- 首行缩进或该样式需要指定一个长度，并且只对第一行生效
- text-indent:length;定义固定的缩进,默认值是0
- text-indent:5%;定义基于父元素宽度的百分比的缩进，对于整个宽度的百分比
- text-indent:inherit;规定应该从父元素继承text-indent属性的值

## 6.text-align
- 对齐
- left:左对齐
- right:右对齐
- justufy:两边对齐
- center:居中对齐

## 7.text-transform
- text-transform:用于将元素中的字母全部变成大小写
- 大写:text-transform:uppercase;
- 小写：text-transorm:lowercase;
- 首字母大写：text-transform:capitalize;
- 正常：text-transform:none;

## 8.list-style
- 设置所有列表属性，针对li标签的
- list-style-type:设置列表项标记的类型
- list-style-position:设置在何处放置列表项标记
- list-style-image:使用图像来替换列表项的标记
- inherit:规定应该从父元素继承list-style属性的值
- ul .circle{list-style-type:circle;}圆形标记
- ul .square{list-style-type:square;}方形标记
- ul .upper-roman{list-style-type:upper-roman;}大写罗马标识符一二三这样
- ul .lower-alpha{list-style-type:lower-alpha;}小写英文标识符abcd这样

## 9.overflow
- 控制溢出情况
- visible:默认值
- scroll:添加滚动条
- auto:根据需要添加滚动条
- hidden:隐藏超出盒子的内容


## 10.line-height
- 用于设置行高，行高越大则行间距越大
- 行间距=line-height-font-size

## 11.box-sizing
- 属性允许以特定的方式定义匹配某个区域特定的元素
- box-sizing:content-box;宽度和高度分别应用到元素的内容框，在宽度和高度之外绘制元素的内容框，比如加padding内边距则不压缩内容框在之外进行扩展
- box-sizing:border-box;固定盒子的宽度高度，框内元素变化比如加padding内边距则压缩内容框
- box-sizing:inherit；规定应从父元素继承box-sizing属性的值
