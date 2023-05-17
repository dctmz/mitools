/**
 * 休眠一定时间
 * @param timeout 毫秒
 * @returns Promise
 */
export const sleep = async (timeout: number) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(true);
    }, timeout),
  );

export default sleep;
