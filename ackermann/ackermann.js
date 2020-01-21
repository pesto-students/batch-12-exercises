
function ackermann(value) {
  const {
    m: firstNum = 0,
    n: secondNum = 0
  } = value;

  // Rule 1 : firstNum = 0
  if (firstNum === 0 && secondNum > 0) {
    return secondNum + 1;
  }

  // Rule 2 : secondNum = 0
  if (firstNum > 0 && secondNum === 0) {
    return ackermann({ m: firstNum - 1, n: 1 });
  }

  // Rule 3: a(firstNum-1, a(firstNum, secondNum-1)) 
  const evalSecond = ackermann({ m: firstNum, n: secondNum - 1 })
  return ackermann({ m: firstNum - 1, n: evalSecond });
}

export {
  ackermann,
};
