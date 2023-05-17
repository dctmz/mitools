const Chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * 生成随机字符串
 * @param len 长度
 * @returns string
 */
export const getRandomString = (length?: number | string) => {
  let len = 0
  if (!length) {
    len = 0
  } else {
    len = Number(length) < 0 ? 0 : Number(length)
  }
  let result = '';
  for (let i = len; i > 0; --i) {
    result += Chars[Math.floor(Math.random() * Chars.length)];
  }

  return result;
};
