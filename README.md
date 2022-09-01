# MiTools

一些常用的工具类

## 安装

```bash
# 推荐使用 pnpm
pnpm i mitools

# npm
npm i mitools
```

## 已实现工具

- `enum2options` 把一个对象类型转换为一个 选择项类型
- `isIdCardNo` 是否身份证
- `openUrl` 浏览器打开一个链接
- `sleep` 休眠
- `telTo` 打电话

### userAgent 工具

- `isAndroid` 是否 Android
- `isApple` 是否苹果
- `isWechatDev` 是否微信开发者工具
- `isWxBrowser` 是否微信浏览器

### url 工具

- `includePath` 是否包含某路径
- `samePath` 是否相同路径
- `isUrl` 是否 url

### oss 工具

- `fastOssProcessUrl` 快速生成一个 oss 处理地址
- `getOssProcessUrl` 生成 oss 处理地址

### string 字符串工具

- `getRandomStr` 获取随机字符串

### reg 常用正则

- `MOBILE_REG` 手机号正则 带国际区号校验
- `EMAIL_REG` 邮箱正则
- `ID_CARD_REG` 身份证正则
- `REPEAT_TIMES` 重复字符
- `SPECIAL_CHARACTER` 特殊字符
- `ONLY_LETTER` 纯字母
- `ONLY_NUMBER` 纯数字
- `CONTAIN_SPACE` 空格

### rules 字段校验规则

- `POWER_PASSWORD` 强密码
