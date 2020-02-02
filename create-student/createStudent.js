
function createStudent(studentobj) {
  if (arguments.length === 0) {
    return 'The student likes JavaScript and ES2015';
  }
  if (Object.keys(studentobj).length === 2) {
    if (!studentobj.likesJavaScript && !studentobj.likesES2015) {
      return 'The student does not like much...';
    }
  }
  if (Object.keys(studentobj).includes('likesES2015')) {
    if (!studentobj.likesES2015) {
      return 'The student likes JavaScript!';
    }
  }
  if (Object.keys(studentobj).includes('likesJavaScript')) {
    if (!studentobj.likesJavaScript) {
      return 'The student likes ES2015!';
    }
  }
  return '';
}

export {
  createStudent,
};
