import { describe, expect, it, vi } from 'vitest';
import { isAndroid, isApple, isWechatDev, isWxBrowser } from '../../src/user-agent';
import { uas } from './uas';

describe('ios test', () => {
  // 模拟环境
  vi.stubGlobal('navigator', {
    userAgent: uas.ios,
  });
  it('isAndroid false', () => {
    expect(isAndroid()).toBe(false);
  });
  it('isApple true', () => {
    expect(isApple()).toBe(true);
  });
  it('isWechatDev false', () => {
    expect(isWechatDev()).toBe(false);
  });
  it('isWxBrowser false', () => {
    expect(isWxBrowser()).toBe(false);
  });
});
