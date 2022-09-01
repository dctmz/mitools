import { describe, expect, it } from 'vitest';

import { getRandomStr } from '../../src/str';

type CaseData = Record<string, (number | string)[]>;

describe('getRandomStr测试', () => {
  const case_data: CaseData = {
    0: [-1, 0],
    1: [0, 0],
    2: ['', 0],
    3: [3, 3],
    4: [10, 10],
    5: [50, 50],
  };
  Object.keys(case_data).forEach(name => {
    it(`参数为:${case_data[name][0]} 返回长度为${case_data[name][1]}`, function () {
      expect(getRandomStr(case_data[name][0]).length).toEqual(
        case_data[name][1],
      );
    });
  });
});
