
function sumEvenArgs(...numberArray) {
  const evenNumberArray = numberArray.filter((num) => num % 2 === 0);
  const sumOfEvenArray = evenNumberArray.reduce((a, b) => a + b, 0);
  return sumOfEvenArray;
}

export {
  sumEvenArgs,
};
