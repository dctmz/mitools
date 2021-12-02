export default (enums: Record<string | number, any>) => {
  const reg = /^\d{1,}$/;
  return Object.keys(enums).map(key => {
    return { label: enums[key], value: reg.test(key) ? Number(key) : key };
  });
};
