
function consumableUsers() {
  this.userObject = [
    { user: 'Alice' },
    { user: 'Bob' },
  ];
  let iterationCount = 0;
  return {
    nextUser: function(x) {
      ++iterationCount;
      return {
        value: this.userObject[iterationCount],
        done: false
      }
    },
    done: function() {
      return {
        done: this.userObject.user === 'Bob',
      }
    }
  };
}

export {
  consumableUsers,
};
