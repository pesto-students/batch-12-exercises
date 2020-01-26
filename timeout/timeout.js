
function timeout(name) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(name)
    },300)
  })
}

export {
  timeout,
};
