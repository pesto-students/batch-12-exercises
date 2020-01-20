
function createStudent(props = {}) {
  const {
    likesJavaScript : childLikesJS = true,
    likesES2015 : childLikesES2015 = true
  } = props;
  var baseStatement = "The student likes ";
  if(childLikesJS){
    baseStatement += "JavaScript";
  }
  if(childLikesES2015 === true && childLikesJS === true){
    baseStatement += " and ";
  }
  if(childLikesES2015){
    baseStatement += "ES2015"; 
  }
  if(childLikesES2015 != childLikesJS){
    baseStatement += "!";
  }
  if(childLikesJS === false && childLikesES2015 === false){
    return "The student does not like much...";
  }
  return baseStatement;
}

export {
  createStudent,
};
