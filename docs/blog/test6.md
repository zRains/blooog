---
title: 'mysql 主键重置'
tag: ['数据库', 'Mysql']
---

在数据库的增删改查操作中难免会出现自增 id 不连续增长的问题。虽然再生产环境环境中没多大用处，但看着不连续就是不爽。在网上找到 3 种重置 id 方法。用那种就看个人情况吧。

<!-- more -->

#### :sunny: TRUNCATE

::: danger 注意

一定要先备份数据（不要把自增 id 也备份了）。

:::

```sql
-- TRUNCATE相当于DROP + CREATE
TRUNCATE TABLE test;
```

直接简单粗暴，备份数据后直接清空表，再恢复表。这样就能达到重置自增 id 的效果。

**优点：**操作简单，可以让处在记录中间不连续的 id 也重置。

**缺点：**相信我，如果数据量稍微大点你绝不会怎么做。毕竟会花很长时间。

#### :sunny: 重置字段

依次执行：

```sql
ALTER  TABLE  test DROP id;
ALTER  TABLE  test ADD id MEDIUMINT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT FIRST;
```

这个的原理就是销毁原来不连续的自增 id 字段，重新创建一个新的从 1 开始的连续的自增 id 字段。

**优点：**相对费时少。

**缺点：**操作难度稍微复杂点。

#### :sunny: 重置自增量

执行：

```sql
ALTER TABLE test AUTO_INCREMENT=1;
```

执行后在插入数据时其自增 id 一定是比前一条记录的自增 id 大 1。

**优点：**费时最少。

**缺点：**不能重置之前记录不连续的自增 id。

#### :sunny: 参考文章

[面试官:mysql 如何重置自增 id](https://blog.csdn.net/zjj2006/article/details/106590559?utm_medium=distribute.wap_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.wap_blog_relevant_pic&depth_1-utm_source=distribute.wap_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.wap_blog_relevant_pic)
