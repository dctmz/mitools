export type BrowserType = 'IE' | 'Chrome' | 'Firefox' | 'Opera' | 'Safari' | 'Edge' | 'QQBrowser' | 'WeixinBrowser' | '360';
export function getBrowser (userAgent: string) {
  let UserAgent = userAgent.toLowerCase();
  let browserInfo: {
    type: BrowserType;
    versions: number;
  } = {
    type: 'Chrome',
    versions: 0,
  };
  const browserArray: Record<BrowserType, boolean> = {
    Chrome: UserAgent.indexOf('chrome') > -1 && UserAgent.indexOf('safari') > -1,
    Firefox: UserAgent.indexOf('firefox') > -1,
    Opera: UserAgent.indexOf('opera') > -1,
    Safari: UserAgent.indexOf('safari') > -1 && UserAgent.indexOf('chrome') === -1,
    Edge: UserAgent.indexOf('edge') > -1,
    QQBrowser: /qqbrowser/.test(UserAgent),
    WeixinBrowser: /MicroMessenger/i.test(UserAgent),
    360: false,
    IE: false
  };
  (Object.keys(browserArray) as BrowserType[]).forEach((i) => {
    if (browserArray[i]) {
      let versions = '';
      if (i === 'IE') {
        const match = UserAgent.match(/(msie\s|trident.*rv:)([\w.]+)/);
        versions = match ? match[2] : '0';
      } else if (i === 'Chrome') {
        const match = UserAgent.match(/chrome\/([\d.]+)/);
        versions = match ? match[1] : '0';
      } else if (i === 'Firefox') {
        const match = UserAgent.match(/firefox\/([\d.]+)/);
        versions = match ? match[1] : '0';
      } else if (i === 'Opera') {
        const match = UserAgent.match(/opera\/([\d.]+)/);
        versions = match ? match[1] : '0';
      } else if (i === 'Safari') {
        const match = UserAgent.match(/version\/([\d.]+)/);
        versions = match ? match[1] : '0';
      } else if (i === 'Edge') {
        const match = UserAgent.match(/edge\/([\d.]+)/);
        versions = match ? match[1] : '0';
      } else if (i === 'QQBrowser') {
        const match = UserAgent.match(/qqbrowser\/([\d.]+)/);
        versions = match ? match[1] : '0';
      }
      browserInfo.type = i;
      browserInfo.versions = parseInt(versions);
    }
  });
  return browserInfo;
}
