
function counterFactory() {
  let counterVariable = 0;
  return {
    increment: function () {
      counterVariable++;
      return counterVariable;
    },
    decrement: function () {
      counterVariable--;
      return counterVariable;
    }
  }

}

export {
  counterFactory,
};
