/**
 * 手机号正则 带国际区号校验
 */
export const MOBILE_REG = /\d{3}-\d{8}|\d{4}-\d{7}|([1][3,4,5,6,7,8,9])\d{9}/;
/**
 * 邮箱正则
 */
export const EMAIL_REG =
  /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
/**
 * 身份证正则
 */
export const ID_CARD_REG =
  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
/** 重复字符 */
export const REPEAT_TIMES_REG = /(\w)\1{3}/g;
/** 特殊字符 */
export const SPECIAL_CHARACTER_REG = /[$@$!%*#?&.]/;
/** 纯字母 */
export const ONLY_LETTER_REG = /[A-Za-z]/;
/** 纯数字 */
export const ONLY_NUMBER_REG = /\d/;
/** 空格 */
export const CONTAIN_SPACE_REG = /\s/g;

// TODO 以下正则还未添加
/** 中文字符 */
export const CHINESE_CHARACTER_REG = /[\u4e00-\u9fa5]/gm;
/** 双字节字符 */
export const DOUBLE_BYTE_CHARACTER_REG = /[^\x00-\xff]/gim;
/** 行首尾空格 */
export const LEADING_TRAILING_SPACES_REG = /(^\s*)|(\s*$)/;
/** url */
export const URL_REG =
  /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
export const IE_REG = /msie (\d+\.\d+)/i;
export const WEBKIT_REG = /webkit/i;
export const CHROME_REG = /chrome\/(\d+\.\d+)/i;
export const FIREFOX_REG = /firefox\/(\d+\.\d+)/i;
export const OPERA_REG =
  /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i;
export const SAFARI_REG = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i;
