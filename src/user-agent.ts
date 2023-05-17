/**
 * 检查是否在安卓浏览器下
 * @returns boolean
 */
export const isAndroid = () => {
  const u = navigator.userAgent.toLocaleLowerCase();
  if (u.includes('android') || u.includes('adr')) {
    return true;
  }

    return false;
};

/**
 * 检查是否在苹果浏览器下
 * @returns boolean
 */
export const isApple = () => {
  const u = navigator.userAgent.toLocaleLowerCase();
  const iPad = u.includes('ipad');
  const iPhone = u.includes('iphone');
  return iPad || iPhone;
};

/**
 * 是否为开发者工具环境
 * @returns boolean
 */
export const isWechatDev = (): boolean => {
  const u = navigator.userAgent;
  return /wechatdevtools/i.test(u);
};

/**
 * 检查是否是微信浏览器
 * @returns boolean
 */
export const isWxBrowser = () => {
  const ua = navigator.userAgent;
  const isWx = /micromessenger/i.test(ua);
  if (!isWx) {
    return false;
  }

    const isWxWork = /wxwork/i.test(ua);
    if (isWxWork) {
      return false;
    }

      return true;
};
