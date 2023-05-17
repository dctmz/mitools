import { includePath, isUrl, openUrl, samePath } from "./url";
import { isWechatDev } from "./user-agent";

export { enum2options } from "./enum";
export { isIdCardNo } from "./idcard";
export { fastOssProcessUrl, getOssProcessUrl, transformObject } from "./oss";
export { telTo } from "./phone";
export {
  CONTAIN_SPACE,
  EMAIL_REG,
  ID_CARD_REG,
  MOBILE_REG,
  ONLY_LETTER,
  ONLY_NUMBER,
  REPEAT_TIMES,
  SPECIAL_CHARACTER
} from "./reg";
export { POWER_PASSWORD } from "./rules";
export { sleep } from "./sleep";
export { getRandomString } from "./string";
export { isAndroid, isApple, isWxBrowser } from "./user-agent";
export {
  // str
  // ua
  isWechatDev,

  /** url */
  openUrl,
  includePath,
  samePath,
  isUrl,
  /** reg */
};

