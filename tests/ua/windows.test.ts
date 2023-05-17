import { describe, expect, it, vi } from 'vitest';
import { isAndroid, isApple, isWechatDev, isWxBrowser } from '../../src/user-agent';
import { uas } from './uas';

describe('windows test', () => {
  // 模拟环境
  vi.stubGlobal('navigator', {
    userAgent: uas.windows,
  });
  it('isAndroid false', () => {
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
