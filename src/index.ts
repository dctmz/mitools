import { enum2options } from './enum';
import { isIdCardNo } from './idcard';
import { fastOssProcessUrl, getOssProcessUrl, transformObject } from './oss';
import {
  CONTAIN_SPACE,
  EMAIL_REG,
  ID_CARD_REG,
  MOBILE_REG,
  ONLY_LETTER,
  ONLY_NUMBER,
  REPEAT_TIMES,
  SPECIAL_CHARACTER,
} from './reg';
import { POWER_PASSWORD } from './rules';
import { sleep } from './sleep';
import { getRandomStr } from './str';
import { telTo } from './telTo';
import { isAndroid, isApple, isWechatDev, isWxBrowser } from './ua';
import { includePath, isUrl, openUrl, samePath } from './url';

export {
  enum2options,
  // idcard
  isIdCardNo,
  // oss
  transformObject,
  getOssProcessUrl,
  fastOssProcessUrl,
  // rules
  POWER_PASSWORD,
  // str
  getRandomStr,
  // ua
  isAndroid,
  isApple,
  isWechatDev,
  isWxBrowser,
  sleep,
  telTo,
  /** url */
  openUrl,
  includePath,
  samePath,
  isUrl,
  /** reg */
  MOBILE_REG,
  EMAIL_REG,
  ID_CARD_REG,
  REPEAT_TIMES,
  SPECIAL_CHARACTER,
  ONLY_LETTER,
  ONLY_NUMBER,
  CONTAIN_SPACE,
};
