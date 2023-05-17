import { describe, expect, it } from 'vitest';
import { getRandomString } from '../../src/string';

type CaseData = Record<string, Array<number | string>>;

describe('getRandomString测试', () => {
  const case_data: CaseData = {
    0: [-1, 0],
    1: [0, 0],
    2: ['', 0],
    3: [3, 3],
    4: [10, 10],
    5: [50, 50],
  };
  for (const name of Object.keys(case_data)) {
    const case_name = case_data[name] || [];
    const len = case_name[0];
    const result = case_name[1]
    it(`参数为:${len} 返回长度为${result}`, () => {
      expect(getRandomString(len).length).toEqual(
        result,
      );
    });
  }
});
