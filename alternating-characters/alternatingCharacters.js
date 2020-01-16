
function alternatingCharacters(strings) {
  const alternatingCharactersArray = strings.map((string) => {
    const chararray = string.split('');
    return chararray.reduce((count, curvalue, curindex) => {
      if (curvalue === chararray[curindex + 1]) {
        // eslint-disable-next-line no-param-reassign
        count += 1;
      }
      return count;
    }, 0);
  });
  return alternatingCharactersArray;
}

export {
  alternatingCharacters,
};
