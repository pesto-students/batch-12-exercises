const fs = require('fs');

function filteredNames(directory, fileType) {
  const fileNames = fs.readdirSync(directory);
  return fileNames.filter((eachFileName) => eachFileName.split('.')[1] === fileType);
}

export {
  filteredNames,
};
