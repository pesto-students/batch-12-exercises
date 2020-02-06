
const splitLines = (lines, { preserveNewlines } = { preserveNewLines: false }) => {
  const linesArray = lines.split('\n');
  if (preserveNewlines === true) {
    return linesArray.map((value, index, array) => {
      if (index !== array.length - 1) {
        return `${value}\n`;
      }
      return value;
    });
  }
  return linesArray.map((line) => line.trim());
};

export {
  splitLines,
};
