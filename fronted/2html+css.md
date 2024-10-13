# CSS
- 机构和样式分开，可以最大程度降低代码耦合度，方便后期维护
# CSS样式
CSS指层叠样式表（Cascading Style Sheets），可以一层一层装修网页
## 作用
- 用来美化网页
- HTML用来构建网页整体布局
- CSS用来美化网页，两者缺一不可
## 基础语法
### 一条或多条声明
``` html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>河马牙医</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"><!--type="image/x-icon"站点图标的类型-->
    <meta name="keywords" content="牙疼怎么办,智齿是什么,拔牙多少钱,矫正多少钱,北大口腔,小白兔牙科">
    <meta name="description" content="有牙齿问题,找河马牙医,儿童口腔,牙疼怎么办,矫正多少钱,种植牙,小白兔牙科">
    <meta name="renderer" content="webkit"/>
    <style><!--!!!!!!-->
        div{
            color:red;
            background-color: blue;
        }
    </style>
```
### 多重声明
```html
<style>
        div{
            color:red;<!--一重-->
            background-color: blue;<!--二重-->
            font-size:20px;<!--三重-->
        }
</style>
```
## CSS样式简介
### 行内样式
（内联式）直接在标签的style属性中书写
### 页内样式
在本网页的style标签中书写（例子就是上面那个代码）
### 外部样式
在单独的CSS文件中书写，然后在网页中用link标签引用
（外部样式创建css文件index.css，内容就style标签里面的东西，引入index.html，在之前\<style>标签的位置改成：\<link rel="stylesheet" href="../index.css">）
- 注意！！！**代码从上往下执行**，就根据最近的执行的变化，优先级也就这样分出来的
## CSS选择器
### 什么是选择器
- 对指定的标签设置样式，要把指定的标签选择出来
### 通用选择器
- 通用选择器可以帮助我们选择页面中所有元素
- 语法：“*{}”
```html
<style>
    *{
        color:purple<!--所有各种标签里面的内容都会变成紫色-->
    }
</style>
```
### 标签选择器
```html
<style>
    <div>{
        color:purple<!--所有<div>标签里面的内容都会变成紫色-->
    }
</style>
```
### 类选择器&id选择器
- 类选择器以一个点号显示： “.center{text-align:center}”
- 只要有同一类名的class都会被选择
- id选择器会对标有特定id的html元素指定特定的样式
- id选择器以“#”定义，**只能独一无二，否则js里面报错**（不独一无二就是class了不可以用id）
```html
<style>
    .p1{color:red}
    .p2{color:green}
    p{color:blue}
    #p3{color:orange}
</style>
<body>
    <p class="p1">我是p1</p><!--red-->
    <p class="p1">我是p1</p><!--red-->
    <p class="p2">我是p2</p><!--green-->
    <p class="p2">我是p2</p><!--green-->
    <p class="p3">我是p3</p><!--blue-->
    <p class="p1 p2">我是p1和p2</p><!--green-->
    <p>没有class的p</p><!--blue-->
    <p id="p3">这是一个带id的</p><!--orange-->
</body>
```
