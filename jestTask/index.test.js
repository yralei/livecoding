it('17 and in africa is 17', () => {
  expect(17).toEqual(17);
});
it('17 is not equal  18', () => {
  expect(17).not.toEqual(18);
});
const getEvenNumbers = (array) => array.filter((el) => el % 2 === 0);

it('should return array of even numbers', () => {
  const result = getEvenNumbers([1, 3, 5, 2, 7, 4, 6, 8]);

  expect(result).toEqual([2, 4, 6, 8]);
});
