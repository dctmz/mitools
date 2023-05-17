import { describe, expect, it } from 'vitest';
import { getBrowser } from '../src/browser';

/**
 * userAgents 是一个数组，里面包含了各种浏览器的 UserAgent
 */
const userAgents = [
  // 安卓
  'Mozilla/5.0 (Linux; Android 10; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36',
  // 苹果
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/90.0.4430.216 Mobile/15E148 Safari/604.1',
  // 微信
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36 MicroMessenger/8.0.7.1920(0x2800075B) Process/appbrand0 NetType/WIFI Language/zh_CN ABI/arm64',
  // QQ
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36 QQ/8.5.5.612 V1_AND_SQ_8.5.5_1844_YYB_D QQTheme/1000 Pixel/1080 StatusBarHeight/81 SimpleUISwitch/0',
  // 360浏览器
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36 360 Aphone Browser (version 10.0.1896.0)',
  // UC浏览器
  'Mozilla/5.0 (Linux; U; Android 10; zh-CN; Redmi K30 Pro Build/QKQ1.191117.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 UCBrowser/13.4.8.1128 Mobile Safari/537.36',
  // 火狐
  'Mozilla/5.0 (Android 10; Mobile; rv:88.0) Gecko/88.0 Firefox/88.0',
  // Opera
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36 OPR/64.3.3282.60149',
  // Edge
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36 Edg/90.0.818.66',
  // 百度
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 baiduboxapp/ (Baidu; P1 10)',
  // 猎豹
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 LieBaoFast/6.51.2',
  // 搜狗
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 SogouSearch Android1.0 version3.0 AppVersion/5901',
  // 2345
  'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 Mb2345Browser/10.0.3.2000',
]

describe('browser test', () => {
  it('browser test', async () => {
    userAgents.forEach(i => {
      const browser = getBrowser(i);
      expect(browser).not.toBe(null);
    })

  });
});
