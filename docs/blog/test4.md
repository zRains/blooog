---
title: 'ubuntu搭建node环境'
tag: ['Node']
---

闲来无事在自己的后端服务器移到自己的树莓派上，实际上是我的云服务器快过期了:sweat_drops:，在此记录搭建过程，其实大部分是关于如何安装最新版 node 的。网上大部分教程都是下载源码直接编译，但我一想到前些日子手动编译安装的 Nginx 想了想还是算了。

<!-- more -->

#### :tada:安装 node

1. 通过 apt 安装 nodejs

在 Ubuntu 的默认仓库包含了一个 Node.js 的版本，截至当前，该仓库的 node.js 版本是 10.21.0 。要安装此版本，你可以使用 apt 包管理器。先刷新你的本地包索引，通过如下命令：

```bash
sudo apt update
```

运行安装命令：

```bash
sudo apt install nodejs
```

::: tip 提示

这个版本可能不是 node 官网上推荐的最新 LTS 版本，如果想自定义安装版本请使用下面的方法。

:::

2. 通过 PPA 安装指定或最新版本的 nodejs

安装指定版本需要使用 nodesource。其需要下载一个脚本，运行此脚本会在 ubuntu 里添加一个 nodejs 源，然后用 apt 就可以下载指定的 nodejs 了。运行下面命令下载指定版本（以 12.x 为例）：

```bash
cd ~
# 下载脚本
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt update
sudo apt install nodejs
```

此脚本会更新 apt 的 node 源至最新的 12.x 版本。

安装官方最新版本使用以下命令：

```bash
cd ~
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt update
sudo apt install nodejs
```

#### :tada: 安装 npm

npm 在安装 nodejs 后就已经自动安装了。如果遇到输入`npm -v`显示没有此命令时就使用:

```bash
sudo apt-get npm
```

::: warning

npm 不同版本对应不同版本的 node，[这里](https://nodejs.org/zh-cn/download/releases/)显示了每个 node 版本对应的 npm 版本号。node 查看版本输入`nodejs -v`即可。

:::

查看 npm 下载源：`npm config get registry`
更换淘宝下载源：`npm config set registry https://registry.npm.taobao.org`

#### :tada:结尾

到这里就可以正常在 ubuntu 上运行 node 项目了。使用`npm init`初始化一个项目，再替换项目的**package.json**后输入`npm install`即可快速安装项目所需依赖包。
