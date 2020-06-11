---
title: "SQLite: 清空表数据"
category: "iOS"
copy: true
tags: [iOS, SQLite, SQLite3]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0017.jpg'
---
`SQL` 标准中有 `TRUNCATE table` 语句, 用来清空表的所有内容,但 `SQLite` 不支持这个语句。在 `SQLite` 中直接使用 `DELETE FROM table` 就可以了。对于大多数 `DBMS` 来说, 用 `DELETE` 不如用 `TRUNCATE` 速度快, 因为 `TRUNCATE` 不用访问整个表, 不用记录数据的变动。

`SQLite` 虽然不支持 `TRUNCATE`, 但它对 `DELETE` 做了优化:

> When the WHERE is omitted from a DELETE statement and the table being deleted has no triggers, SQLite uses an optimization to erase the entire table content without having to visit each row of the table individually. This “truncate” optimization makes the delete run much faster.

与此同时, 偶们通常还需要将自增列归零, 该怎么做呢?

在 `SQLite` 中定义自增列的语句像这样:

```sql
CREATE TABLE t_sample_table ( id INTEGER PRIMARY KEY AUTOINCREMENT, ... );
```

当 `SQLite` 数据库中包含自增列时, 会自动建立一个名为 `sqlite_sequence` 的表, 包含两个列: `name` 与 `seq`:

* `name` 记录自增列所在的表
* `seq` 记录当前序号

所以如果想把某个自增列的序号归零, 修改 `sqlite_sequence` 表即可:

```sql
UPDATE sqlite_sequence SET seq = 0 WHERE name = 't_sample_table';
```

当然你也可以直接把该记录删掉:

```sql
DELETE FROM sqlite_sequence WHERE name = 't_sample_table';
```

要想将所有表的自增列都归零, 直接清空 `sqlite_sequence` 表就可以了：

```sql
DELETE FROM sqlite_sequence;
```
