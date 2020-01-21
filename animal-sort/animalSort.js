
const sortByLegs = (animalA, animalB) => {
  return parseInt(animalA.numberOfLegs) > parseInt(animalB.numberOfLegs);
}

const sortByName = (animalA, animalB) => {
  return animalA.name > animalB.name;
}

function animalSort(pureAnimals) {
  const animals = pureAnimals.slice()
  return animals.sort(sortByName).sort(sortByLegs)
}

export {
  animalSort,
};
