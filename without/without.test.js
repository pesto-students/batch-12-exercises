import { without } from './without';

describe('without', () => {
  it('returns an array not containing values in the first argument', () => {
    expect(without([1, 2], [1, 2, 1, 4, 5])).toEqual([4, 5]);
    expect(without([0], [-0]).length).toBe(1);
    expect(without([-0], [0]).length).toBe(1);
    expect(without([NaN], [NaN]).length).toBe(0);
    expect(without([[1]], [[1]]).length).toBe(0);
  });
});

const hasElement = (elementToSearch, array) => {
  return array.some(el => Object.is(el, elementToSearch));
};

function without(excludedValues, list) {
  return list.reduce((sanitizedList, currentElement) => {
    if (!hasElement(currentElement, excludedValues)) {
      return [...sanitizedList, currentElement];
    }
    return sanitizedList;
  }, []);
}

// const hasElement = (array, givenEl) => {
//   const isObjectSameAsEl = compareObjects(givenEl);
//   if (typeof givenEl === 'object') {
//     return array.some(isObjectSameAsEl);
//   }
//   return array.some(el => Object.is(el, givenEl));
// };
