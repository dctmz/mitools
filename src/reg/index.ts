/**
 * 手机号正则 带国际区号校验
 */
export const MOBILE_PHONE_NUMBER_REG =
  /\d{3}-\d{8}|\d{4}-\d{7}|([1][3,4,5,6,7,8,9])\d{9}/;
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

/** user agent 正则 */
/** IE */
export const UA_IE_REG = /msie (\d+\.\d+)/i;
/** webkit */
export const UA_WEBKIT_REG = /webkit/i;
/** chrome */
export const UA_CHROME_REG = /chrome\/(\d+\.\d+)/i;
/** firefox */
export const UA_FIREFOX_REG = /firefox\/(\d+\.\d+)/i;
/** opera */
export const UA_OPERA_REG =
  /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i;
/** safari */
export const UA_SAFARI_REG = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i;
/** android */
export const UA_ANDROID_REG = /android/i;
/** ipad */
export const UA_IPAD_REG = /ipad/i;
/** iphone */
export const UA_IPHONE_REG = /iphone/i;
/** mac */
export const UA_MAC_REG = /macintosh/i;
/** windows */
export const UA_WIN_REG = /windows/i;
/** mobile */
export const UA_MOBILE_REG =
  /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i;

/**
 * tags 正则
 */

/** links */
export const LINK_REG = /\<link\s(.*?)\s*(([^&]>)|(\/\>)|(\<\/link\>))/gi;
/** html */
export const HTML_REG = /<(\S*?) [^>]*>.*?<\/\1>|<.*?\/>/gm;
/** not html */
export const NOT_HTML_REG = /^[^<>`~!/@\#}$%:;)(_^{&*=|'+]+$/;
/** script tag */
export const SCRIPT_TAG_REG = /<script[^>]*>[\s\S]*?<\/[^>]*script>/gi;
/** html block comment */
export const HTML_BLOCK_COMMENT_REG = /<!--[\s\S]*?--\>/g;
/** html if comment */
export const HTML_IF_COMMENT_REG = /\[\s*if\s+[^\]][\s\w]*\]/i;
/** html if comment of not ie */
export const HTML_IF_NOT_IE_COMMENT_REG =
  /^\[if\s+(!IE|false)\]>.*<!\[endif\]$/i;
/** css expression */
export const CSS_EXPRESSION_REG = /expression[\s\r\n ]?\(/gi;
/** not html tag */
export const NOT_HTML_TAG_REG = /<\W+>/gi;
/** textarea tag */
export const TEXTAREA_TAG_REG = /<textarea[^>]*>[\s\S]*?<\/[^>]*textarea>/gi;
