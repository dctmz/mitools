const Chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * 生成随机字符串
 * @param len 长度
 * @returns string
 */
export const getRandomString = (length?: number | string) => {
  if (!length) {
    throw new Error('length is required');
  }
  const len = Number(length)
  length = len < 0 ? 0 : Number(length);
  let result = '';
  for (let i = length; i > 0; --i) {
    result += Chars[Math.floor(Math.random() * Chars.length)];
  }

  return result;
};
