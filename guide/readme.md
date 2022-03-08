# 使用指南

若要自行添加信息，需先 fork 本仓库，再在 [`data/persona`](../data/persona) 文件夹下创建自己的「persona」，最后发起 pull request 合并进来。

「persona」所在文件夹的名字就是 [`ourai.ws`](https://ourai.ws/) 上生成的人物信息页 URL `https://ourai.ws/people/{slug}/` 中的 `slug`。

文件夹下所应有的文件包括：

- 命名为 `avatar` 的图片文件，作为头像使用，格式不限，正方形，分辨率不超过 `500 * 500`；
- 命名为 `banner` 的图片文件，作为人物页头图和人物卡片背景图使用，格式不限，横向长方形，建议宽度 `1000px` 以上；
- 描述人物信息的 `metadata.yml`，具体内容见下方；
- 对人物进行详细介绍的 `readme.md`，可选。

人物元数据 `metadata.yml` 中所需字段为：

```yml
name: 欧雷 # 人物在网上的名称
brief: 多面玩家 # 用来与人物名称以「{name}：{brief}」的形式拼成个性化的网页标题，可选
description: 思考并探索改变生活、玩转人生的方法。 # 一句话简介，显示在人物页头部和人物卡片上的简短介绍
professions: # 人物职业，为了显示的完整性，建议不超过三个且总字数不超过十个字
  - title: 生活黑客
  - title: 反混沌工程师
websites: # 个人网站，第一个将作为主站对待，可选
  - title: 欧雷流 # 网站标题
    url: https://ourai.ws/ # 网址
    description: 不走寻常路 # 网站简介，可选
contacts: # 联系方式，可选
  email: ourairyu@gmail.com
  github: ourai
banner: # 人物页头图/人物卡片背景图的额外信息，可选
  description: Anti-chaos # 图片是什么
```

其中，联系方式可以为：

| 联系方式 | 键 | 值 |
| --- | --- | --- |
| 电子邮箱 | `email` | 电子邮箱地址 |
| 手机或座机电话 | `phone` | 手机或座机号码，座机要带区号 |
| 微信 | `wechat` | 能搜到微信联系人的方式 |
| Telegram | `telegram` | 能搜到 Telegram 联系人的方式 |
| 任何 SNS 网站 | - | 在 SNS 网站上的个人资料页唯一标识 |
