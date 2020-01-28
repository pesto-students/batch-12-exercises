
function isEmpty(mayBeEmpty) {
  switch (typeof mayBeEmpty) {
    case 'object': 
      if(mayBeEmpty === null){
        return false;
      }
      const lengthOfObject = Object.keys(mayBeEmpty).length;
      if (lengthOfObject < 1) {
        return true;
      }
      break;
    case 'function': const argsLength = mayBeEmpty.length;
      if (argsLength < 1) {
        return true;
      }
      break;
    case 'undefined': return false; break;
    case 'string': if (mayBeEmpty.length < 1) {
      return true;
    }
      break;
    case 'number' : return false; break;
  }
  return false;
}

export {
  isEmpty,
};

