# 两种CSS布局
圣杯布局和双飞翼布局，两者功能相同，都是为了实现一个两侧宽度固定，中间宽度自适应的三栏布局
## 遵循特点
1. 两侧宽度固定，中间宽度自适应
2. 中间部分在DOM结构上优先，以便先行渲染
3. 允许三列中的任意一列成为最高列
4. 只需要使用一个额外的\<div>标签
# 圣杯布局
1. 写下HTML代码
2. 使三个区域都处于左浮动状态，并使用main的宽度为父容器的100%
3. 为两侧侧边栏添加margin，用以调整位置，其中摆在左边的left的margin-left为-100%,而右边的right的margin-left则为负的其自身的宽度。（利用了浮动元素的负margin到一定值后会使其自身往上一行移动的原理）
4. 为class="container"的容器设置左右padding值，使其为以后的侧边栏定位空出位置，padding的值为侧边栏的宽
5. 对left和right添加position:relative，然后对他们进行定位，移动到两侧，圣杯布局就初步完成了
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>圣杯布局</title>
    <style>
        body{
            margin:0;
            padding:0;
        }
        .container{
            min width:400px;
            height:200px;
            /*预留出位置*/
            padding:0 200px;
        }
        .left,.right{
            width:200px;
            height:200px;
            float:left;
        }
        .main{
            width:100%;
            height:200px;
            float:left;
        }
        .left{
            margin-left:-100%;
            position:relative;
            left:-200px;
        }
        .right{
            margin-left:-200px;
            position:relative;
            right:-200px;
        }
    </style>
</head>
<body>
    <!--容器-->
    <div class="container">
        <div class="main"></div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```
# 双飞翼布局
双飞翼布局不仅能满足main处于优先加载的地位，而且更好的解决了圣杯布局错乱问题，且css代码更简单，缺点是增加了一个标签。
## 步骤
给main里面添加一个内容标签content，并且设置它的左右margin值为左右侧边栏的宽度
去掉main的背景色和高度，双飞翼布局
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>圣杯布局</title>
    <style>
        body{
            margin:0;
            padding:0;
        }
        .container{
            min width:400px;
            height:200px;
        }
        .left,.right{
            width:200px;
            height:200px;
            float:left;
        }
        .main{
            width:100%;
            height:200px;
            float:left;
        }
        .main-content{
            margin:0 200px;
        }
        .left{
            margin-left:-100%;
        }
        .right{
            margin-left:-200px;
        }
    </style>
</head>
<body>
    <!--容器-->
    <div class="container">
        <div class="main">
            <div class="main-content">中间栏</div>
        </div>
        <div class="left">左边栏</div>
        <div class="right">右边栏</div>
    </div>
</body>
</html>
```
# 双飞翼布局和圣杯布局的对比
## 优点
1. 双飞翼布局完美解决了圣杯布局的布局错乱问题
2. 双飞翼布局css代码逻辑更简单
## 缺点
- 添加了无意义的标签