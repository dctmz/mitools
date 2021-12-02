import enum2options from './enum2options';
import isIdCardNo from './isIdCardNo';
import * as reg from './reg';
import { sleep } from './sleep';

export default {
  ...reg,
  isIdCardNo,
  sleep,
  enum2options,
};
