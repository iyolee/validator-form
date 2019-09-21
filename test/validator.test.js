import { validateValue } from '../validators';

test('单个正则规则去校验单个值', () => {
  expect(validateValue('leeper', 'nameSpell')).toEqual({
    isValid: true,
    message: ''
  });
});

test('单个正则规则去校验单个值', () => {
  expect(validateValue(['leeper', 'jenkin'], ['nameSpell', 'maxLength40Address'], false)).toEqual({
    isValid: true,
    message: []
  });
});