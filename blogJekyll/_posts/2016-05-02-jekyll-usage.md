---
layout: post
title: jekyll usage
category: jekyll
---

##使用jekyll在github上搭建个人博客
<hr />


##github pages
github page是github提供的一种可以显示自己git库上网页的服务。

<hr />
##如何使用githbu pages
有两种方法:
第一种，在github上创建新的仓库，命名为`username.github.io`，username就是自己注册的用户名，`master`分支根目录上创建index.html。打开网页`username.github.io`，就可以看见新建的index.html。

第二种，没有命名限制，可以基于现有的库来创建，当然也可以开新的仓库 。新建orphan分支`git checkout --orphan gh-pages`，分支名一定要是`gh-pages`。然后在`username.github.io/reposname`上就可以看见根目录上的index.html，reposname就是库名。

<hr />
##什么是jekyll
>Jekyll 是一个简单的博客形态的静态站点生产机器。它有一个模版目录，其中包含原始文本格式的文档，通过 Markdown （或者 Textile） 以及 Liquid 转化成一个完整的可发布的静态网站，你可以发布在任何你喜爱的服务器上。Jekyll 也可以运行在 GitHub Page 上，也就是说，你可以使用 GitHub 的服务来搭建你的项目页面、博客或者网站，而且是**完全免费**的。

以下是内容都是介绍jekyll的简单用法，详细请看[官方文档](https://jekyllrb.com/)

<hr />
##使用jekyll在github上搭建个人博客
github pages 支持jekyll，因此可以直接将源码上传到github pages上，会自动解释并生成网页。

**1.目录结构**
![mulu.png]({{site.baseurl}}/assets/mulu.png)


`_name` 的是jekyll的默认文件/文件夹，可通过liquid读取
`_data/`  里面的文件可通过`site.data.xx`来读取
`_includes/` 里面的文件可被引用到模板上
`_layouts/` 模板存放的地方
`_posts/`存放博文，可通过`page.xx`来读取相应数据
`_site/`运行生成的文件存放在这里，自动生成
`_config.yml`配置文件，里面的属性可通过`site.xx`来读取
`index.html`主页
`404.html`一定要是`404.html`才能作为404页面

liquid的语法可参见该文: [liquid用法笔记](http://blog.csdn.net/dont27/article/details/38097581)


**2.配置文件_config.yml**
有很多配置，详细参见官方文档，简单的配置如下

```html
encoding: utf-8 //网页的编码
baseurl: /reposname //用于site.baseurl, 适应github pages的路径, 不过好像不用这个，直接用相对路径可以。
permalink: pretty  //生成路径的方法，不过好像不设置也没差别
```

**3.模板_layouts**
_layouts/下新建default.html

```html
<!DOCTYPE html>
<html >
<head>
	<title>{{page.title}}</title>
       <!--  调用page.title变量 -->
</head>

<body>
	<main class="container">
		<div class="wrapper">
			{&#123; content &#125;}
 <!--  调用该模板的文件的主内容全部显示在content里 -->
		</div>
	</main>

	{&#37; include sidebar.html &#37;}
<!--  引用_include/sidebar.html -->

</body>
</html>
```

**4.index.html**
给index.html添加以下内容 

```html
---
layout: default
title: Hello World
---
<p>hello world</p>
<!-- 
虚线中间layout 表示要调用的模板，其他变量可通过page.xxx来引用。
虚线下面的内容为主内容，显示在content中。
-->
```

现在打开github page上的网页(`username.github.io` 或者 `username.github.io/reposname` 视乎你用哪种方法创建github pages)应该就能看见hello world。

**5.post博文**
在`_posts`文件夹里创建文件`2016-05-01-this-is-post.html`
注意post的命名格式是`yyyy-mm-dd-title.html/md`，之后生成链接可以用`post.url`来指向博文

```html
//2016-05-01-this-is-post.html
---
layout: default
title: this is post 1
---
<p>this is post one</p>
```

修改index.html，加入新博文的链接


```html
//index.html
---
layout: default
title: Hello World
---

<h1>hello world</h1>
{% for post in site.posts %}
  <a href="{{ site.baseurl }}{{ post.url }}"> {{post.title}}</a>
  注意site.baseurl 与 post.url中间没有 "/" ,因为post.url自带了"/"
  
{% endfor %}

```

<hr />
##结束
以上就是jekyll的简单用法，大家可以看看我创建的[博客](https://chenxxzhe.github.io/philoblog/dist)，很简单的，一看就懂。
[源码点这里](https://github.com/chenxxzhe/philoblog/tree/gh-pages/blogJekyll)


也可以看看别人的[jekyll模板](http://jekyllthemes.org/)