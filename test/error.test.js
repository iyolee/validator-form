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