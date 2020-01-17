
function abbreviateString(string) {
  if(typeof string !== "string"){
    throw string+" is not of type string.";
  }
  const stringAsArray = string.split(' ');
  const firstName = stringAsArray[0];
  const lastName = stringAsArray[stringAsArray.length-1];
  const shortenLastName = lastName.slice(0,1).toUpperCase();
  const abbreviateString = firstName+" "+shortenLastName+".";
  return abbreviateString;
}

export {
  abbreviateString,
};
