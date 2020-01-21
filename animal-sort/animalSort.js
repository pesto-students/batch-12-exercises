
function animalSort(arrayOfAnimalObj) {
  if (arrayOfAnimalObj.length === 0) {
    return [];
  }

  const sortedAnimalArray = arrayOfAnimalObj.sort((animalObj1, animalObj2) => {
    if (animalObj1.numberOfLegs < animalObj2.numberOfLegs) {
      return -1;
    }
    if (animalObj1.numberOfLegs > animalObj2.numberOfLegs) {
      return 1;
    }
    if (animalObj1.numberOfLegs === animalObj2.numberOfLegs) {
      const animalObj1nameUppercased = animalObj1.name.toUpperCase();
      const animalObj2nameUppercased = animalObj2.name.toUpperCase();
      if (animalObj1nameUppercased < animalObj2nameUppercased) {
        return -1;
      }
      if (animalObj1nameUppercased > animalObj2nameUppercased) {
        return 1;
      }
      return 0;
    }
  });

  return sortedAnimalArray;
}

export {
  animalSort,
};
