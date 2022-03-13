import Validator from '../validator';

test.each([
  { name: 'Luna-555DD' },
  { name: 'V____V' },
  { name: 'Slonik_123Z' },
])('It creates users with valid names', (obj) => {
  const newUser = new Validator(obj.name);
  expect(newUser.userName).toBe(obj.name);
});

test.each([
  { name: '_Max-15-56' },
  { name: 'fred1458_X' },
  { name: '-Mary' },
])('It unable to create users with invalid name', (obj) => {
  try {
    Validator.createUser(obj.name);
  } catch (e) {
    expect(e.message).toBe('Invalid user name');
  }
});
