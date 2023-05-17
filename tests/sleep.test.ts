import { describe, expect, it } from 'vitest';
import { sleep } from '../src/sleep';

describe('sleep test', () => {
  it('serial test', async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    expect(end - start).to.toBeGreaterThanOrEqual(100);
  });
});
