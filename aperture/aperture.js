
const slice = (start, end, array) => {
  return array.slice(start, end);
}

function aperture(chunkSize, array) {
  const result = [];
  for (let index = 0; index <= array.length - chunkSize; index += 1) {
    const chunk = slice(index, index + chunkSize, array)
    result.push(chunk);
  }
  return result;
}

export {
  aperture,
};
