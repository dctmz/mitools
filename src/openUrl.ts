/**
 * 打开一个url
 * @param url 要打开的地址
 */
export const openUrl = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
