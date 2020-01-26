
function sleep(timer) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('');
    },timer);
  })
}

export {
  sleep,
};
