/** 数学方法 */
/**
 * 输入数字或者字符串返回数字，保留两位小数
 * @param num
 * @returns {number}
 */
export const toFixed = (num?: string | number): number => {
  if (!num) return 0;
  if (typeof num === 'string') {
    num = Number(num);
  }
  return Number(num.toFixed(2));
};

// 加法
export const arrAddition = (arr?: (string | number | undefined)[]) => {
  if (!arr) return;
  return toFixed(arr.map(i => (i ? Number(i) : 0)).reduce((a, b) => a + b));
};
