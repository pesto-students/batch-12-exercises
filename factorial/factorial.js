
function factorial(number) {
  if(parseInt(number)<0 || typeof number !== "number"){
    throw new Error("The provided value is not a Number or less than 0.");
  }
  if(parseInt(number) === 1 || parseInt(number) === 0){
    return 1;
  }
  return (parseInt(number) * factorial(parseInt(number)-1));
}

export {
  factorial,
};
