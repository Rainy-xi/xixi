# 1.MarkDown是什么？
'Markdown' 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。
Markdown 允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的HTML文档。
Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。
Markdown 编写的文档后缀为 .md, .markdown。
我个人认为Markdown是现在现在是互联网上最流行的写作语言！！！许多网站平台的文章、博客、论文都是基于它写的！！！
# 2.MarkDown优点
Markdown的标签是【轻量级】【标记】【语言】【纯文本编辑】【支持跨平台同步数据】【支持插入图片视频】【随时修改，不必担心排版出错】
# 3.MarkDown基本语法
## 3.1.标题
\# 一级标题  
\## 二级标题  
\### 三级标题  
\#### 四级标题  
\##### 五级标题  
\###### 六级标题  
效果： 
# 一级标题  
## 二级标题  
### 三级标题 
#### 四级标题 
##### 五级标题 
###### 六级标题  
注意：最后一个#与标题中间留一个空格；标题应该置于行首，如果放在表格里面无法正确解析  
## 3.2.字体  
星号或下划线都可以，单是斜体，双是粗体，三是粗斜体  
\*这是斜体* *这是斜体*  
\_这是斜体_ _这是斜体_  
\**这是粗体** **这是粗体**  
\__这是粗体__ __这是粗体__  
\*\*\*这是粗斜体***  ***这是粗斜体***  
\_\_\_这是粗斜体\_\_\_ ___这是粗斜体___  

## 3.3.换行
 1.在句末加两个空格  
 2.两句话之间加一个空格  
 3.或者加<br/>  
 ## 3.4.引用
 \> 这是引用符号，可以嵌套
 ## 3.5.链接
插入链接的使用方式：  
[链接名称](链接地址)或<链接地址>  
[淅淅的窝](https://gitee.com/xinyu2424502411/xixi)或
<https://gitee.com/xinyu2424502411/xixi>
## 3.6.图片
插入图片的使用方式：  
\![图片描述可以不写但中括号必须要有]\(图片地址，本地连接或URL地址，网上好多人都说支持决定对路径，百般尝试发现不行，只能相对路径)  

![随便一个图](/Somebasics/images/markdown1.png)  
=======
![随便一个图](images/markdown1.png) 

## 3.7.列表
圆圈标头（无序列表），使用*、+、-再加一个空格作为列表的标记,数字标头（有序列表），使用1.2.3.：  
\* 无序列表  
\* 无序列表  
\+ 无序列表  
\- 无序列表   
\1. 有序列表  
\2. 有序列表  
\3. 有序列表 

效果：  
* 无序列表
* 无序列表
+ 无序列表
- 无序列表
1. 有序列表
2. 有序列表
3. 有序列表  
如果想要控制列表的层级需要在标头前使用Tab按键
## 3.8.分割线
\_\_\_ ；\*\*\*;\_ \_ \_;\* \* \*;  
如此在一行中用三个_or*来建立一个分割线，但是注意在分割线上面填一行空行！！！否则会导致前一行字体放大；效果如下

___
***
_ _ _
* * *
## 3.9.删除线
可以在要添加删除线的文字前后添加两个~
效果如下：  
~~这是要删除的文字~~
## 3.10.下划线
可以在文本前后添加\<u>文本\</u>  
<u>这是要添加下划线的文字</u>  
## 3.11.代码块
三个反引号加代码代号  
\`\`\`cpp  
内容  
\`\`\`  
```cpp  
#include<iostream>
int main(){
    print("HelloWorld");
}  
```
一行内的代码用反引号一个就够了  
\`Hello\`  
`Hello` World

支持以下代码：  
bash  
c，clojure，cpp，cs，css  
dart，dockerfile, diff  
erlang  
go，gradle，groovy  
haskell  
java，javascript，json，julia  
kotlin  
lisp，lua  
makefile，markdown，matlab  
objectivec  
perl，php，python  
r，ruby，rust  
scala，shell，sql，swift  
tex，typescript  
verilog，vhdl  
xml  
yaml  
## 3.12.表格
表格使用|分割不同的单元格，用-分割表头和其他行,注意：一定要开头空一行符号用英文书写    
* :- 将表头及单元格内容左对齐
* -: 将表头及单元格内容右对齐
* :-: 将表头及单元格内容居中
效果如下：   

 | 项目        | 价格   |  数量  |
 | --------   | :----- | :----:  |
 | 计算机     | \$1600 |   5     |
 | 手机        |   \$12   |   12   |
 | 管线        |    \$1    |  234  |

## 3.13.脚注
使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Typora[^T] 编辑器进行书写。  
\[^1]:Markdown是一种纯文本标记语言  
\[^2]:HyperText Markup Language 超文本标记语言  
\[^T]:NEW WAY TO READ & WRITE MARKDOWN  
效果如下,注意：千万不能有空格喔：  

[^1]: Markdown是一种纯文本标记语言  
[^2]: HyperTextMarkupLanguage超文本标记语言    
[^T]: NEWWAYTOREAD&WRITEMARKDOWN  
![效果图](/Somebasics/images/markdown1.png)
=======
![效果图](images/markdown1.png)
## 3.14.特殊符号
前面加反斜线\即可以显示符号本身
## 3.15.书写公式
`$$表示整行公式`  
`$$E=mc^2$$`  
效果如下：
$$E=mc^2$$
## 3.16.HTML表格
![](/Somebasics/images/markdown2.jpg)
<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张明</td>
        <td>王平</td>
    </tr>
</table>
<<<<<<< HEAD
=======

>>>>>>> 7b1a4c0d6d535e9d48b1cda80d4eb9ed113d2c3e






