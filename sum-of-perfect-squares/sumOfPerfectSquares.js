const smallestlistofPerfectSquare = [];

function arrayofsmallsquare(number) {
  if (number === 1) {
    smallestlistofPerfectSquare.push(1);
    return smallestlistofPerfectSquare;
  }
  let temp = Math.floor(Math.sqrt(number));
  smallestlistofPerfectSquare.push(temp);
  var diff = number - (temp * temp);
  return arrayofsmallsquare(diff);
}

function sumOfPerfectSquares(number) {
  arrayofsmallsquare(number);
  return smallestlistofPerfectSquare.length;
}

export {
  sumOfPerfectSquares,
};


// console.log(sumOfPerfectSquares(15));