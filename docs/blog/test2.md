---
title: 'Cookies 登录验证'
tag: ['前端']
---

很少写登录方面的东西，不过这东西以后肯定是要做的。自己写了个后台就用上了登录，可能有点 low 但还是学到了不少。

<!-- more -->

**生成 cookies**


```js
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.post('/api/login', function(request, res) {
  res.cookie(
    'SSID',
    { userName: userName },
    {
      maxAge: 3000000,
      httpOnly: true,
    }
  )
  res.json({ stats: 200 })
})
```
