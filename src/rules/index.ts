import {
  CONTAIN_SPACE,
  ONLY_LETTER,
  ONLY_NUMBER,
  REPEAT_TIMES,
  SPECIAL_CHARACTER,
} from '../reg';

/**
 * 强密码
 * @see 强密码策略：
 * 用户密码至少含有大、小写字母、特殊字符和阿拉伯数字中的3种；
 * 密码长度至少8位；
 * 最近 4 个口令不重复
 */
export const POWER_PASSWORD = [
  { required: true, min: 12, message: '密码长度最少12位' },
  { pattern: ONLY_LETTER, message: '密码需要包含字母' },
  { pattern: SPECIAL_CHARACTER, message: '密码需要包含特殊字符' },
  { pattern: ONLY_NUMBER, message: '密码需要包含数字' },
  () => ({
    validator(_: any, value: string) {
      const strMatch = value.match(CONTAIN_SPACE);
      if (strMatch) return Promise.reject(new Error('不可包含空格'));
      return Promise.resolve();
    },
  }),
  () => ({
    validator(_: any, value: string) {
      const strMatch = value.match(REPEAT_TIMES);
      if (strMatch) {
        const times4 = strMatch.find(item => item.length >= 4);
        if (times4) return Promise.reject(new Error('最近 4 个口令不重复'));
      }
      return Promise.resolve();
    },
  }),
];
