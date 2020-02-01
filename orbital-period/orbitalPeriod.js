
function orbitalPeriod(arrayOfDic) {
  const gm = 398600.4418;
  const earthRadius = 6367.4447;
  const newArray = [];
  arrayOfDic.forEach((item) => {
    const newDic = {};
    const getOrbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(((earthRadius + item.avgAlt) ** 3) / gm),
    );
    newDic.name = item.name;
    newDic.orbitalPeriod = getOrbitalPeriod;
    newArray.push(newDic);
  });
  return newArray;
}

export {
  orbitalPeriod,
};
