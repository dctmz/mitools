# HDVEC

衡度保事件中心 SDK

## 安装

```
npm i hdvec
```

## 使用

```js
import HDVEC from 'hdvec'

// 创建实例
const vec = new HDVEC({
  apiUrl: 'https://xxxx',
  timeout: 1e3,
  fetch: axios,
  defaultParams: {
    rn: '111111',
    sn: '22222',
  },
})

// 提交事件
vec.dispatch('COUNT', { count })
```
