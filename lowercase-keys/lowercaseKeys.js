
function lowercaseKeys(object) {
  var Keys = Object.keys(object);
  const newKeyedobject = {};
  for(var index=0; index < Keys.length; index +=1){
    newKeyedobject[Keys[index].toLowerCase()] = object[Keys[index]];
  }
  return newKeyedobject;
}

export {
  lowercaseKeys,
};
