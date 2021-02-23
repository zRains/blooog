---
title: Axios 详解
tag: ['Axios', 'Js']
---

因为需求在主键挂载后发出两个 API 请求，如果分开写会导致主键读取不到数据。于是看了一下 Axios 的并发，但发现有点不太一样。

<!-- more -->

#### :sunny: 问题

网上大部分资料是用 Axios 自带 all 方法：

```js
axios.all([axios.get('/test1'), axios.get('/test2')]).then(
  axios.spread((test1Res, test2Res) => {
    console.log(test1Res, test2Res)
  })
)
```

但在 vue 里使用后会[报错](https://github.com/axios/axios/issues/948)：

::: console_error
Custom instance defaults axios.all is not a function
:::

#### :sunny: 原因

`axios.all()`为静态方法，此方法不在 axios 实列中。

#### :sunny: 解决

使用`Promise.all()`代替：

```js
let p1 = axios.get('/test1')
let p2 = axios.get('/test2', {
  params: { id },
})
Promise.all([p1, p2]).then(data => {
  let test1Res = data[0].data
  let test2Res = data[1].data
})
```

#### :sunny: 参考文章

[vue-axios 并发请求](https://www.jianshu.com/p/960571352bef)

[Custom instance defaults axios.all is not a function ](https://github.com/axios/axios/issues/948#issuecomment-322051733)
