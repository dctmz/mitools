/**
 * 拨打电话号码
 *
 * 使用a标签的tel:xxx方式
 * @param mobile 电话号码
 */
export const telTo = (mobile?: string) => {
  if (!mobile) {
    throw new Error('no mobile');
  }

  window.location.href = `tel:${mobile}`;
};
