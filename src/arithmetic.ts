export const arrAddition = (arr?: (string | number | undefined)[]) => {
  if (!arr) return;
  return arr.map((i) => (i ? Number(i) : 0)).reduce((a, b) => a + b);
};
