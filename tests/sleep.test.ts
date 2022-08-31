import { describe, expect, it } from 'vitest';

import { sleep } from './../src/sleep';

describe('sleep test', () => {
  it('serial test', async () => {
    const start = +new Date();
    await sleep(1000);
    const end = +new Date();
    expect(end - start).to.toBeGreaterThanOrEqual(100);
  });
});
