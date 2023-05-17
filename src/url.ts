const reg = /\/$/g;

/**
 * 判断路由中是否包含某个path
 * @param url url
 * @param urls url 数组
 * @returns boolean
 */
export const includePath = (url: string, urls: string[]) => urls.map(i => i.replace(reg, '')).includes(url.replace(reg, ''));

/**
 * 判断两个链接是否为同一个path
 *
 * 例如：/a 和 /a/ 返回true
 * @param url1 url
 * @param url2 url
 * @returns boolean
 */
export const samePath = (url1: string, url2: string) => url1.replace(reg, '') === url2.replace(reg, '');

/**
 * 检查一个字符串是否是url
 * @param str url
 * @returns Boolean
 */
export const isUrl = (string_: string) => {
  const reg = /^https?:\/\//i;
  return reg.test(string_);
};

/**
 * 打开一个url
 * @param url 要打开的地址
 */
export const openUrl = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.style.display = 'none';
  document.body.append(a);
  a.click();
  a.remove();
};
