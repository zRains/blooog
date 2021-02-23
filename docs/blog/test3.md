---
title: 'editor 图片上传示例'
tag: ['前端', 'ES5']
---

关于博客的展示组件自己选了好久，另一个[mavonEditor](https://github.com/hinesboy/mavonEditor)也不错，但支持的插件不多，于是选了这个[ vue-markdown-editor](https://github.com/code-farmer-i/vue-markdown-editor)（均国产:v:），支持自定义高亮语法包和插件自定义，最重要的是包小啊。研究了一下图片上传的功能，挺香的。官方文档有实列但过于简洁。记录一下编写过程。

<!-- more -->

::: tip 前提

我用的是**Express**搭建的后端，使用**Axios**发送数据。接收图片无非就是把前端的图片表单数据拿到，后端再处理一下数据保存到相应位置，最后返回路径就行了。

:::

#### :sunny: 准备工作

由于在新版本**express 4**中，文件处理`req.files`不可用，所以我们需要借助 npm 包来处理上传的图片数据，这里我们借助的是`formidable`。安装命令：

```bash {1}
npm install formidable -S
```

#### :sunny: 前端

一个简单的上传触发组件：

```vue
<!-- Example -->
<template>
  <div>
    <!-- 注意启用上传本地图片功能：:disabled-menus="[]" -->
    <v-md-editor
      v-model="content"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
    ></v-md-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    }
  },
  methods: {
    //  files为文件上传的数组对象，由于是单个图片，上传对象即为files[0]
    handleUploadImage(event, insertImage, files) {
      // 创建form对象
      let param = new FormData()
      // 通过append向form对象添加文件数据
      param.append('file', files[0])
      // 发送图片数据，注意配置请求头，否则后端可能无法识别。
      this.$axios
        .post('post', param, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          // 调用 insertImage 向编辑器内插入图片数据
          insertImage({
            url: res.data.data.path,
            desc: res.data.data.name,
          })
        })
    },
  },
}
</script>
```

#### :sunny: 后端

一个简单的上传接口：

```js
let formidable = require('formidable')
let path = require('path')
const cors = require('cors')
let express = require('express')
const app = express()

// 用cors做一下简单的跨域处理
app.use(cors({ credentials: true, origin: true }))
// 启动express服务器
app.listen(8081, () => {
  console.log('图片上传测试服务器')
})

app.post('/api/post', function(req, res) {
  let form = new formidable.IncomingForm()
  // 设置编码
  form.encoding = 'utf-8'
  // 保留扩展名
  form.keepExtensions = true
  //文件存储路径 最后要注意加 '/' 否则会被存在img下
  form.uploadDir = path.join('/var/www/html/img/imgs/')
  // 解析 formData 数据
  form.parse(req, (err, fields, files) => {
    if (err) return res.json({ code: 0, data: null })
    let imgPath = files.file.path
    let imgName = files.file.name
    // 返回路径和文件名，注意处理一下路径！！
    res.json({
      code: 1,
      data: { name: imgName, path: imgPath.replace('/var/www/html', '') },
    })
  })
})
```

重启**Express**即可。

#### :sunny: 文件重命名与移动

网上教程大多数就到这儿完了，实际使用时发现诸多不便。上面代码会把所有上传图片弄进一个文件夹了，难以管理，且文件名都是经过处理的。用多个文件分开储存，并保留原本文件名会更方便管理。

##### :zap: 前端

```js
    handleUploadImage(event, insertImage, files) {
      let param = new FormData();
      param.append("file", files[0]);
      // 向表单中添加额外的数据方便做分类
      param.append("article_id", this.$route.query.id);
    },
```

##### :zap: 后端

```js
let fs = require("fs");

app.post("/api/post", function (req, res) {
  let form = new formidable.IncomingForm();
  form.encoding = "utf-8";
  form.keepExtensions = true;
  form.uploadDir = path.join("./static/images/");
  form.parse(req, (err, fields, files) => {
    if (err) return res.json({ code: 0, data: null });
    let imgPath = files.file.path;
    let imgName = files.file.name;
    // 通过fields获取前端传过来的额外数据，这里有个小坑
    // windows的路径分隔符为'\'，而linux的为'/'。注意不同环境下的书写
    let folder = path.dirname(imgPath) + "/" + fields.article_id;
    let newpath = path.join(folder + "/", imgName);
    // fs的exists函数现已被废弃，这里用access判断文件夹是否存在
    fs.access(folder, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.rename(imgPath, newpath, (err) => {
          if (err) console.log(err);
        });
      } else {
        // 不存在先创建，再移动文件
        fs.mkdir(folder, (err) => {
          if (err) console.log(err);
        });
        fs.rename(imgPath, newpath, (err) => {
          if (err) log(err);
        });
      }
    });

```

#### :sunny: 参考文章

[express 实现图片上传](https://blog.csdn.net/weixin_34407348/article/details/91466417)

[axios 图片上传](https://www.jianshu.com/p/bd7f11da436f)

[vue 项目中使用 axios 上传图片等文件](https://www.jianshu.com/p/0a473fdf5f3e)
