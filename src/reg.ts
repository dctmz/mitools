/**
 * 手机号正则 带国际区号校验
 */
export const MOBILE_REG = /\d{3}-\d{8}|\d{4}-\d{7}|(1[3,456789])\d{9}/;
/**
 * 邮箱正则
 */
export const EMAIL_REG = /\w[-\w.+]*@([A-Za-z\d][-A-Za-z\d]+\.)+[A-Za-z]{2,14}/;
/**
 * 身份证正则
 */
export const ID_CARD_REG = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[\dXx]$/;
/** 重复字符 */
export const REPEAT_TIMES = /(\w)\1{3}/g;
/** 特殊字符 */
export const SPECIAL_CHARACTER = /[$@!%*#?&.]/;
/** 纯字母 */
export const ONLY_LETTER = /[A-Za-z]/;
/** 纯数字 */
export const ONLY_NUMBER = /\d/;
/** 空格 */
export const CONTAIN_SPACE = /\s/g;
