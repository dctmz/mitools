import { describe, expect, it, vi } from 'vitest';

import { isAndroid, isApple, isWechatDev, isWxBrowser } from '../../src/ua';
import { uas } from './uas';

describe(`mac test`, () => {
  // 模拟环境
  vi.stubGlobal('navigator', {
    userAgent: uas.mac,
  });
  it(`isAndroid false`, () => {
    expect(isAndroid()).toBe(false);
  });
  it('isApple false', () => {
    expect(isApple()).toBe(false);
  });
  it('isWechatDev false', () => {
    expect(isWechatDev()).toBe(false);
  });
  it('isWxBrowser false', () => {
    expect(isWxBrowser()).toBe(false);
  });
});
