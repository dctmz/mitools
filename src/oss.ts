/**
 * OSS 工具类
 * 只针对公有bucket
 */

/**
 * 转换配置对象
 * @date 2022-09-01
 * @param {any} name:string
 * @param {any} obj?:Record<string
 * @param {any} any>|number
 * @returns {any}
 */
export const transformObject = (
  name: string,
  obj?: Record<string, any> | number,
) => {
  if (!obj) return '';
  if (typeof obj === 'number') {
    return `${name},${obj}`;
  }
  return `${name},` + Object.keys(obj).map(key => `${key}_${obj[key]}`);
};

/**
 * 获取oss图像处理地址
 * @date 2022-09-01
 * @param {any} url:string oss url
 * @param {any} options:OssProcessOptions 设置
 * @returns {string} 处理后的地址
 */
export const getOssProcessUrl = (
  url: string,
  options: OssProcessOptions,
): string => {
  const query = Object.keys(options)
    .map(i => transformObject(i, options[i as keyof OssProcessOptions]))
    .join('/');
  return `${url}?x-oss-process=image/${query}`;
};

/**
 * 快速处理图像
 * @date 2022-09-01
 * @param {any} url:string url
 * @param {any} w:number
 * @param {any} q?:number
 * @returns {any}
 */
export const fastOssProcessUrl = (url: string, w: number, q?: number) => {
  return getOssProcessUrl(url, {
    resize: { w },
    quality: { q: q || 80 },
    interlace: 1,
  });
};
