/**
 * 检查是否在安卓浏览器下
 * @returns boolean
 */
export const isAndroid = () => {
  const u = navigator.userAgent.toLocaleLowerCase();
  console.log(u);
  if (u.indexOf('android') > -1 || u.indexOf('adr') > -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * 检查是否在苹果浏览器下
 * @returns boolean
 */
export const isApple = () => {
  const u = navigator.userAgent.toLocaleLowerCase();
  const iPad = u.indexOf('ipad') > -1;
  const iPhone = u.indexOf('iphone') > -1;
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
  const isWx = /MicroMessenger/i.test(ua);
  if (!isWx) {
    return false;
  } else {
    const isWxWork = /WxWork/i.test(ua);
    if (isWxWork) {
      return false;
    } else {
      return true;
    }
  }
};
