import imgPicker from './imgPicker';

const noLabels = [];
const mockedLabels = [{node: {name: 'friend'}}];

it('returns image path when there are no labels', () => {
  expect(imgPicker(noLabels)).not.toBe(undefined);
});

it('returns image path', () => {
  expect(imgPicker(mockedLabels)).not.toBe(undefined);
});
