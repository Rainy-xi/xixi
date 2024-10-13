# 一、基本概念
## web标准
### 什么是web标准
web标准不是某一个标准，而是由W3C和其他标准化组织制定的一系列标准的集合
网页主要由三部分组成：结构（structure）、表现（presentation）和行为（behavior）
### web标准
- 结构：html
- 表现：css
- 行为:js(dom+es)
## html简介
### 什么是html
- Html是用来描述网页的一种语言
- HTML指的是超文本标记语言（hyper text markup language）
- html不是一种编程语言，而是一种标记语言（markup language）
- 标记语言就是一套标记标签
- html使用标记标签来描述网页
### 什么是html标签
- html标签通常被称为html标签（html tag）
- html标签是由尖括号包围的关键词，比如<html>
- html标签通常是成对出现的比如<b></b>
- 标签对中的第一个标签是开始标签，第二个标签是结束标签
- 开始和结束标签也被称为开放标签和闭合标签
### html文档
- 用来描述网页
- 包含标签和纯文本
- 文档也被称为网页
- web浏览器的作用是读取html文档，并以网页的形式显示出它们
- 浏览器不会显示html标签，而是使用标签解释页面的内容
### html文档结构
- html文档结构包括三部分:第一部分是<html>，第二部分是<body>，第三部分是<body>以外动态语言的脚本
- <html>
- <head>
- <title>
- <meta>元标签，<meta>这个标签用来描述html网页的文档属性
- <body>
```cpp  
<html lang="en">
    <head>
        <meta charset="UTF-8"><!-- 用怎样的字符集或字符编码来解析，这里设置的是UTF-8-->
        <title>Title</title>
    </head>
    <body>

    </body>
</html> 
```
# 二、标签
## 标签概述
- html标签是html语言中最基本的单位
- 不同的标签在网页中会显示不同的内容
## 标签特点
1. 由尖括号包围的关键词，比如<html>
2. 通常是成对出现，比如<div></div>
3. 标签对中的第一个标签是开始标签，第二个标签是结束标签
4. 开始和结束标签也被称为开放标签和闭合标签
5. 也有单独呈现的标签，如：<img src="一张图.jpg"/>等
6. 一般成对出现的标签，其内容在两个标签中间。单独呈现的标签，则在标签属性中赋值。如<h1>标题</h1><input type="text" value="按钮"/>