import { describe, expect, it } from 'vitest';
import { arrAddition } from '../src/arithmetic';

const arrMap = {
  6: [1, 2, 3],
  10: [1, 2, 3, 4],
  15: [1, 2, 3, 4, 5],
  2: ['', '2'],
  0.3: [0.1, 0.2],
};

describe('arithmetic', () => {
  it('should add', () => {
    for (const [key, value] of Object.entries(arrMap)) {
      const res = arrAddition(value);
      expect(res).toBe(Number(key));
    }
  });
});
