/**
 * 休眠一定时间
 * @param timeout 毫秒
 * @returns Promise
 */
export const sleep = (timeout: number) => {
  return new Promise(resolve => setTimeout(() => resolve(true), timeout));
};

export default sleep;
