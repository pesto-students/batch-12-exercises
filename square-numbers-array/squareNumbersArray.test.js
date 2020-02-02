import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(myArray)).toThrow('Please ensure all elements of array are number');
  });
  test('should return square array', () => {
    const myArray = [2, 4, 9];
    expect(squareNumbersArray(myArray)).toEqual([4, 16, 81]);
  });
});
