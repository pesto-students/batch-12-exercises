
function addBigIntegers(string) {
  let numberlist = string.split('\n');
  let toAddNumberList = numberlist.slice(1, numberlist.length);
  console.log(toAddNumberList);
  console.log(numberlist);
  var addednumber = toAddNumberList.reduce((acc, number) => acc + Number(number), 0);
  if (Number.isSafeInteger(addednumber)) {
    return addednumber.toString();
  }
  return BigInt.asUintN(64, addednumber).toString();
}

export {
  addBigIntegers,
};
// console.log(addBigIntegers(`3
// 539
// 8
// 201`));