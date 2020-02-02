
function blockScoping(number) {
  const num = number;
  return (function() {
    return num;
  }());
}

export {
  blockScoping,
};
