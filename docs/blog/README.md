**在把网站部署后发现 static 文件里面的东西访问不了，因为文件里只有一个`favicon.png`文件，通过控制台发现是通过`.../_nuxt/favicon.png`访问的，照葫芦画瓢发现还是访问不到。一直以为问题是 Nuxt 没有配置好，到头来还是出在反向代理上啊。**

#### :sunny: 解决

在 Nginx 配置文件里添加如下匹配规则：

```nginx
# 如果需要其它类型文件，在()里继续添加后缀即可
location ~.*\.(css|js|jpg) {
	# zy注意替换为自己的端口号。需要注意两点：1.proxy_pass的值不能有 / ，2.也不能有uri
	proxy_pass http://127.0.0.1:8080;
}
```

#### :sunny: 参考文章

[Nginx 反向代理无法加载 css、js、image 静态资源文件](https://blog.csdn.net/qq_37254736/article/details/104370849)
