
function allOfConditions(...executableFunc) {
  return function(input){
    for(let funcIndex = 0; funcIndex < executableFunc.length; funcIndex+=1){
      if(!executableFunc[funcIndex](input)){
        break;
      }
    }
  }
}

export {
  allOfConditions,
};
