
const collectNumbersTillChar = (result, value) => {
  if (!Object.keys(result).includes('flag')) { result.flag = true; }
  if (!isNaN(Number(value)) && result.flag === true) {
    result.number.push(value);
  } else {
    result.flag = false;
  }
  return result;
}


function bizarreStringIncrementer(word) {
  const chars = word.split('');
  const { number } = chars.reduceRight(collectNumbersTillChar, { number: [] });
  if (number.length === 0) {
    return word + '1';
  }
  const incrementedNumber = Number(number.reverse().join('')) + 1;
  const postFix = incrementedNumber.toString().padStart(number.length, "0");
  const preFix = word.substring(0, word.length - number.length);
  return preFix + postFix;


}

export {
  bizarreStringIncrementer,
};
