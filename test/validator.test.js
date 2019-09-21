import { validateValue } from '../validators';

test('case1: 单条正则去校验单个值', () => {
  expect(validateValue('leeper', 'nameSpell')).toEqual({
    isValid: true,
    message: ''
  });
});

test('case2: 单条正则去校验单个值', () => {
  expect(validateValue(['leeper'], 'nameSpell')).toEqual({
    isValid: true,
    message: ''
  });
});

test('case3: 单条正则去校验单个值', () => {
  expect(validateValue('leeper', ['nameSpell'])).toEqual({
    isValid: true,
    message: ''
  });
});

test('case4: 单条正则去校验单个值', () => {
  expect(validateValue(['leeper'], ['nameSpell'])).toEqual({
    isValid: true,
    message: ''
  });
});

test('case5: 单条正则去校验单个值', () => {
  expect(validateValue('leeper@$.com', ['email'])).toEqual({
    isValid: false,
    message: '邮箱格式不正确'
  });
});

test('case6: 单条正则去校验单个值', () => {
  expect(validateValue('leeper@$.com', ['email'], false)).toEqual({
    isValid: false,
    message: ['邮箱格式不正确']
  });
});

test('case7: 单条正则去校验单个值', () => {
  expect(validateValue(['leeper@$.com'], ['email'])).toEqual({
    isValid: false,
    message: '邮箱格式不正确'
  });
});

test('case8: 多条正则去校验单个值', () => {
  expect(validateValue('leeper', ['nameSpell', 'maxLength10'])).toEqual({
    isValid: true,
    message: ''
  });
});

test('case9: 多条正则去校验单个值', () => {
  expect(validateValue(['leeper'], [['nameSpell', 'maxLength10']])).toEqual({
    isValid: true,
    message: ''
  });
});

test('case10: 多条正则去校验单个值', () => {
  expect(validateValue('leeperleeperleeper@$.com', ['maxLength10', 'email', 'maxLength10'], false)).toEqual({
    isValid: false,
    message: ['字符长度不能超过10', '邮箱格式不正确', '字符长度不能超过10']
  });
});

test('case11: 多条正则去校验单个值', () => {
  expect(validateValue('leeperleeperleeper', ['email', 'maxLength10'])).toEqual({
    isValid: false,
    message: '邮箱格式不正确,字符长度不能超过10'
  });
});

test('case12: 多条正则去校验多个值', () => {
  expect(validateValue(
    ['leeperleeperleeper', 'leeper23554@@yy.com'],
    [['email', 'maxLength10'], ['maxLength10', 'email', 'maxLength10']],
    false
  )).toEqual({
    isValid: false,
    message: [['邮箱格式不正确', '字符长度不能超过10'], ['字符长度不能超过10', '邮箱格式不正确', '字符长度不能超过10']]
  });
});

test('case13: 多条正则去校验多个值', () => {
  expect(validateValue(
    ['leeperleeperleeper', 'leeper23554@@yy.com'],
    [['maxLength10'], ['maxLength10', 'email', 'maxLength10']],
    false
  )).toEqual({
    isValid: false,
    message: [['字符长度不能超过10'], ['字符长度不能超过10', '邮箱格式不正确', '字符长度不能超过10']]
  });
});

test('case14: 多条正则去校验多个值', () => {
  expect(validateValue(
    ['leeperleeperleeper', 'leeper23554@@yy.com'],
    [['maxLength10'], ['maxLength10', 'email', 'maxLength10']],
    true
  )).toEqual({
    isValid: false,
    message: '字符长度不能超过10,字符长度不能超过10,邮箱格式不正确,字符长度不能超过10'
  });
});
