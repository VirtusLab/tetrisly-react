import { mergeObjects } from './mergeObjects';

describe('mergeObject', () => {
  it("should merge two objects in such a way that the second object's properties override the first object's properties", () => {
    const object1 = {
      name: 'John',

      age: 20,
      address: {
        city: 'New York',
        country: 'USA',
      },
    };

    const object2 = {
      name: 'Jane',
      lastName: 'Doe',
      address: {
        city: 'Los Angeles',
      },
    };

    const result = {
      name: 'Jane',
      age: 20,
      lastName: 'Doe',
      address: {
        city: 'Los Angeles',
        country: 'USA',
      },
    };

    const mergedObject = mergeObjects(object1, object2);

    expect(mergedObject).toEqual(result);
  });
});
