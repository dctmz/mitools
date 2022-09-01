const reg = /\/$/g;

/**
 * 判断路由中是否包含某个path
 * @param url url
 * @param urls url 数组
 * @returns boolean
 */
export const includePath = (url: string, urls: string[]) => {
  return urls.map(i => i.replace(reg, '')).includes(url.replace(reg, ''));
};

/**
 * 判断两个链接是否为同一个path
 *
 * 例如：/a 和 /a/ 返回true
 * @param url1 url
 * @param url2 url
 * @returns boolean
 */
export const samePath = (url1: string, url2: string) => {
  return url1.replace(reg, '') === url2.replace(reg, '');
};

/**
 * 检查一个字符串是否是url
 * @param str url
 * @returns Boolean
 */
export const isUrl = (str: string) => {
  const reg = /^https?:\/\//i;
  return reg.test(str);
};
