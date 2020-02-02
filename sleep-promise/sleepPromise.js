
function sleep(number) {
  return new Promise((resolve) => setTimeout(resolve, number));
}

export {
  sleep,
};
