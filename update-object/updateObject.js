
function updateObjectImplementation(index, element, array) {
  const maxLength = array.length;
  if (index < 0) {
    index = maxLength + index;
  }
  const newArray = array.slice();
  if (index < maxLength && index >=0 ) {
    newArray[index] = element;
  }
  return newArray;
}

function updateObject(...args){
  if(args.length === 1){
    return function (element){
      return function (array){
        return updateObjectImplementation(...args,element,array);
      }
    }
  }else{
    return updateObjectImplementation(...args);
  }
}

export {
  updateObject,
};
