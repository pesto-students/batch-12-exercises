const greet = (entity) => new Promise((res) => {
  res(`Hey ${entity}`);
}).then((greetings) => greetings);

export {
  greet,
};
