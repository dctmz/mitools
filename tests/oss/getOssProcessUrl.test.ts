import { describe, expect, it } from 'vitest';

import { fastOssProcessUrl, getOssProcessUrl } from '../../src/oss';

describe('获取oss图片处理地址 test', () => {
  const url = 'http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg';
  const resultUrl = `${url}?x-oss-process=image/resize,w_100/quality,q_80/interlace,1`;
  it('resize test', async () => {
    expect(
      getOssProcessUrl(url, {
        resize: {
          w: 100,
        },
        quality: {
          q: 80,
        },
        interlace: 1,
      }),
    ).toEqual(resultUrl);
  });
  it('fastOssProcessUrl test', async () => {
    expect(fastOssProcessUrl(url, 100)).toEqual(resultUrl);
  });
});
