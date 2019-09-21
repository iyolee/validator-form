import { validateValue } from '../validators';

test('error1: 第一个参数为必填参数', () => {
  expect(() => {
    validateValue();
  }).toThrowError(new Error('function validateValue first argument is required'));
});

test('error2: 第二个参数为必填参数', () => {
  expect(() => {
    validateValue('leeper');
  }).toThrowError(new Error('function validateValue second argument is required'));
});

test('error3: 第一个参数为字符串或数组', () => {
  expect(() => {
    validateValue({ name: 'leeper' }, 'email');
  }).toThrowError(new Error('function validateValue type of first argument should be String or Array'));
});

test('error4: 第二个参数为字符串或数组', () => {
  expect(() => {
    validateValue('leeper', { name: 'leeper' });
  }).toThrowError(new Error('function validateValue type of second argument should be String or Array'));
});

test('error5: 第二个参数为字符串或数组', () => {
  expect(() => {
    validateValue(['leeper'], ['email', 'nameSpell']);
  }).toThrowError(new Error('The length of the array of argument first should be equal to the length of the array of argument second'));
});

test('error6: 正则设置不正确', () => {
  expect(() => {
    validateValue('leeper', 'error1');
  }).toThrowError(new Error('/^[a-z]{1,50}$/ is not a regular expression'));
});

test('error7: message设置不正确', () => {
  expect(() => {
    validateValue('leeper', 'error2');
  }).toThrowError(new Error('[object Object] is not a String'));
});

test('error8: 第三个参数设置不正确', () => {
  console.warn = jest.fn();
  validateValue('leeper', 'nameSpell', 'true');
  expect(console.warn.mock.calls[0][0]).toBe('function validateValue type of third argument should be Boolean');
});