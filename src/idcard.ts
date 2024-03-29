const cities = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江 ',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北',
  43: '湖南',
  44: '广东',
  45: '广西',
  46: '海南',
  50: '重庆',
  51: '四川',
  52: '贵州',
  53: '云南',
  54: '西藏',
  61: '陕西',
  62: '甘肃',
  63: '青海',
  64: '宁夏',
  65: '新疆',
  71: '台湾',
  81: '香港',
  82: '澳门',
  91: '国外',
};

/**
 * 身份证校验算法
 */
export const isIdCardNo = (string_: string) => {
  let number_ = string_.toUpperCase();
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(number_)) {
    // Alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
    // alert('身份证号长度不正确或不符合规定！');
    return false;
  }

  if (!Object.keys(cities).includes(number_.slice(0, 2))) {
    return false;
  }

  // 下面分别分析出生日期和校验位
  let re;
  const length = number_.length;
  if (length === 15) {
    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
    const arraySplit = number_.match(re); // 检查生日日期是否正确
    if (!arraySplit) {
      return false;
    }

    const dtmBirth = new Date(`19${arraySplit[2]}/${arraySplit[3]}/${arraySplit[4]}`);
    // Let bGoodDay;
    const bGoodDay
      = dtmBirth.getFullYear() === Number(arraySplit[2])
      && dtmBirth.getMonth() + 1 === Number(arraySplit[3])
      && dtmBirth.getDate() === Number(arraySplit[4]);
    if (!bGoodDay) {
      return false;
    }

    // 将15位身份证转成18位 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    const arrayInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arrayCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let nTemporary = 0;
    let i;
    number_ = `${number_.slice(0, 6)}19${number_.slice(6, 6 + number_.length - 6)}`;
    for (i = 0; i < 17; i += 1) {
      nTemporary += Number(number_.substr(i, 1)) * (arrayInt[i] as number);
    }

    number_ += arrayCh[nTemporary % 11];
    return true;
  }

  if (length === 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})(\d|X)$/);
    const arraySplit = number_.match(re); // 检查生日日期是否正确
    if (!arraySplit) {
      return false;
    }

    const dtmBirth = new Date(`${arraySplit[2]}/${arraySplit[3]}/${arraySplit[4]}`);

    const bGoodDay
      = dtmBirth.getFullYear() === Number(arraySplit[2])
      && dtmBirth.getMonth() + 1 === Number(arraySplit[3])
      && dtmBirth.getDate() === Number(arraySplit[4]);
    if (!bGoodDay) {
      return false;
    }
    // 检验18位身份证的校验码是否正确。 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。

    const arrayInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arrayCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let nTemporary = 0;
    for (let i = 0; i < 17; i += 1) {
      nTemporary += Number(number_.substr(i, 1)) * (arrayInt[i] as number);
    }

    const value = arrayCh[nTemporary % 11];
    if (value !== number_.slice(17, 18)) {
      return false;
    }

    return true;
  }

  return false;
};
