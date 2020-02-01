/* eslint-disable guard-for-in */


function diffArray(list1, list2) {
  const combinedlist = list1.concat(list2);
  const commonlist = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < combinedlist.length; i++) {
    if (combinedlist.indexOf(combinedlist[i], i + 1) > -1) {
      commonlist.push(combinedlist[i]);
    }
  }
  return combinedlist.filter((eachitem) => !commonlist.includes(eachitem));
}

export {
  diffArray,
};
