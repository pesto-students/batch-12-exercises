function calculateOrbitalPeriod(object) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const { name, avgAlt } = object;
  const orbitalPeriodOfCelestial = Math.round(
    2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM),
  );
  const orbitalObject = {
    name: name,
    orbitalPeriod: orbitalPeriodOfCelestial,
  };
  return orbitalObject;
}


function orbitalPeriod(arrayOfObject) {
  const arrayOfOrbitalObject = arrayOfObject.map((object) => calculateOrbitalPeriod(object));
  return arrayOfOrbitalObject;
}

export {
  orbitalPeriod,
};
