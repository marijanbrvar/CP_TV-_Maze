import counter from '../src/classes/util';

it('Should return Array length greather than 0', () => {
  const items = [
    {
      id: 1,
    },
  ];
  const result = counter(items);
  expect(result).toBeGreaterThan(0);
});

it('Should return length of comments array greather than 0', () => {
  const items = [
    {
      item_id: 1,
      creation_date: '197-26-09',
      comments: 5,
    },
  ];
  const result = counter(items);
  expect(result).toBeGreaterThan(0);
});

it('Should return length of Items array greather than 0', () => {
  const items = [
    {
      id: 1,
      title: 'Something',
    },
  ];
  const result = counter(items);
  expect(result).toBeGreaterThan(0);
});
