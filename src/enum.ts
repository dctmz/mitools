/**
 * 把一个对象类型转换为一个 选择项类型
 * @param enums 对象
 * @returns 选项类型 {label:string; value:string | number}[]
 */
export const enum2options = (enums: Record<string | number, string>) => {
  const reg = /^\d+$/;
  return Object.keys(enums).map(key => ({
    label: enums[key],
    value: reg.test(key) ? Number(key) : key,
  }));
};
