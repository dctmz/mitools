declare type OssProcessOptions = {
  /**
   * 图片缩放
   */
  resize?: Partial<{
    /**
     * 指定缩放的模式。
     * @description
     * - lfit（默认值）：等比缩放，缩放图限制为指定w与h的矩形内的最大图片。
     * - mfit：等比缩放，缩放图为延伸出指定w与h的矩形框外的最小图片。
     * - fill：将原图等比缩放为延伸出指定w与h的矩形框外的最小图片，然后将超出的部分进行居中裁剪。
     * - pad：将原图缩放为指定w与h的矩形内的最大图片，然后使用指定颜色居中填充空白部分。
     * - fixed：固定宽高，强制缩放。
     * @see 当缩放模式指定为lfit或mfit时，如果等比为小数，则四舍五入保留整数
     * @see 当缩放模式指定为m模式下的任意值，且为目标缩放图的宽度w或目标缩放图的高度h指定了值，则目标缩放图的最长边l或目标缩放图的最短边s的取值不生效。
     */
    m?: 'lfit' | 'mfit' | 'fill' | 'pad' | 'fixed';
    /**
     * 指定目标缩放图的宽度。	[1,16384]
     */
    w: number;
    /**
     * 指定目标缩放图的高度。	[1,16384]
     */
    h: number;
    /**
     * 指定目标缩放图的最长边。
     * @see 取值范围[1,16384]
     *
     * @description
     * 说明 长边是指原尺寸与目标尺寸的比值大的边。
     * @example
     * 例如，原图为400 px*200 px，缩放为800 px*100 px。由于（400/800）<（200/100），因此在该缩放操作中，200为长边。
     */
    l: number;
    /**
     * 指定目标缩放图的最短边。
     */
    s: number;
    /**
     * 指定当目标缩放图大于原图时是否进行缩放。
     * @description
     * - 1（默认值）：表示不按指定参数进行缩放，直接返回原图。
     * - 0：按指定参数进行缩放。
     */
    limit: number;
    /**
     * 当缩放模式选择为pad（缩放填充）时，可以设置填充的颜色。
     * @desc
     * RGB颜色值，例如：000000表示黑色，FFFFFF表示白色。
     * @see 默认值：FFFFFF（白色）
     */
    color: number;
  }>;
  /**
   * TODO 水印
   */
  watermark?: Partial<Record<string, unknown>>;
  /**
   * TODO 自定义裁剪
   */
  crop?: Partial<Record<string, unknown>>;
  /**
   * TODO 质量变换
   */
  quality?: Partial<{
    /**
     * 设置图片的相对质量，对原图按百分比进行质量压缩。
     * @desc
     * 例如原图质量为100%，添加quality,q_90参数会得到质量为90％的图片。原图质量为80%，添加quality,q_90参数会得到质量72%的图片。
     *
     * @see 取值范围[1,100]
     */
    q: number;
    /**
     * 设置图片的绝对质量，将原图质量压缩至Q%，如果原图质量小于指定参数值，则按照原图质量重新进行压缩。
     * @desc
     * 例如原图质量是95%，添加quality,Q_90参数会得到质量90％的图片。原图质量是80%，添加quality,Q_90只能得到质量80%的图片。
     * @see 取值范围[1,100]
     */
    Q: number;
  }>;
  /**
   * TODO 格式转换
   */
  format?: Partial<Record<string, unknown>>;
  /**
   * TODO 获取信息
   */
  info?: Partial<Record<string, unknown>>;
  /**
   * TODO 自适应方向
   */
  'auto-orient'?: Partial<Record<string, unknown>>;
  /**
   * TODO 内切圆
   */
  circle?: Partial<Record<string, unknown>>;
  /**
   * TODO 索引切割
   */
  indexcrop?: Partial<Record<string, unknown>>;
  /**
   * TODO 圆角矩形
   */
  'ounded-corners'?: Partial<Record<string, unknown>>;
  /**
   * TODO 模糊效果
   */
  blur?: Partial<Record<string, unknown>>;
  /**
   * TODO 旋转
   */
  rotate?: Partial<Record<string, unknown>>;
  /**
   * 渐进显示
   * @desc
   * - 1：表示将原图设置成渐进显示。
   * - 0：表示将原图设置成标准显示。
   */
  interlace?: 1 | 0;
  /**
   * TODO 获取图片主色调
   */
  'average-hue'?: Partial<Record<string, unknown>>;
  /**
   * TODO 亮度
   */
  bright?: Partial<Record<string, unknown>>;
  /**
   * TODO 锐化
   */
  sharpen?: Partial<Record<string, unknown>>;
  /**
   * TODO 对比度
   */
  contrast?: Partial<Record<string, unknown>>;
};
