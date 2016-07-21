###查找.git和.svn信息泄露
安装chrome插件

检测到.git和.svn信息泄露的时候会自动弹框提醒。未检测到无提示。

###优点

支持网站目录检测,例如

```
http://www.baidu.com
http://www.baidu.com/aaa/
http://www.baidu.com/aaa/index.php?id=xxx

```
均可进行检测

```
http://www.baidu.com/.git/
http://www.baidu.com/aaa/.git/
http://www.baidu.com/.svn/
http://www.baidu.com/aaa/.svn/

```
使用字符串进行匹配，误报率极低。