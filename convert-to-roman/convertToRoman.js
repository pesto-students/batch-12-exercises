
const romanValues = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
}

function convertToRoman(number) {
  const stringifiedNumber = Array.from(number.toString());
  stringifiedNumber.map((value, index) => {
    const multiplier = 10 ** (index + 1);
    if (value === 0) {
      return '';
    }
    if ((value === 1) || (value === 2) || (value === 3)) {
      return value.repeat(multiplier);
    }
    
  });
}

export {
  convertToRoman,
};
