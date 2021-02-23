---
title: 'Docker常用命令'
tag: ['Docker', '后端']
---

记录一些 Docker 常用命令

<!-- more -->

- 查看所有 Docker 镜像

```bash
docker images
# 或
docker images ls
```

- 查看镜像详细信息

```bash
docker inspect xxx:TAG # xxx:镜像名 TAG:镜像标签
```

- 删除所有容器

```bash
docker rm $(docker ps -aq)
```
