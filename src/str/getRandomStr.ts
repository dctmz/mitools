const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * 生成随机字符串
 * @param len 长度
 * @returns string
 */
export const getRandomStr = (len: number | string) => {
  len = len < 0 ? 0 : Number(len);
  let result = '';
  for (var i = len; i > 0; --i) {
    result += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return result;
};
