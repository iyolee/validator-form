/* eslint-disable */

import validateStrategy from './strategys';

const _toString = Object.prototype.toString;

function _isRegExp(r) {
  return _toString.call(r) === '[object RegExp]';
}

function _isString(s) {
  return _toString.call(s) === '[object String]';
}

function _isArray(a) {
  return _toString.call(a) === '[object Array]';
}

function _isBoolean(b) {
  return _toString.call(b) === '[object Boolean]';
}

// force arguments
function _mandatoryArgs(n) {
  throw new Error(`function validateValue ${n} argument is required`);
}

// check arguments
function _handleAndCheckArgs(a1 = _mandatoryArgs('first'), 
  a2 = _mandatoryArgs('second'), a3) {

  if (!_isString(a1) && !_isArray(a1)) {
    throw new Error('function validateValue type of first argument should be String or Array');
  }
  if (!_isString(a2) && !_isArray(a2)) {
    throw new Error('function validateValue type of second argument should be String or Array');
  }
  if (!_isBoolean(a3)) {
    console.warn
      ('function validateValue type of third argument should be Boolean');
  }
  if (_isArray(a1) && _isArray(a2) && a1.length !== a2.length) {
    throw new Error('The length of the array of argument first should be equal to the length of the array of argument second');
  }

  return {
    valueArr: _isArray(a1) ? a1 : [a1],
    strategyArr: _isArray(a2) ? a2 : [a2],
    isReturnStr: _isBoolean(a3) ? a3 : true
  };
}

/**
 * @function validateSingleValue
 * check whether a single value meets one or more check rules
 * @param {String} value
 * @param {Array} strategyArr
 * @returns {Object}
 * {
 *   isValid: Boolean,
 *   message:? String
 * }
 */
function _validateSingleValue(value, strategyArr) {
  const resultCache = {
    isValid: true
  };
  strategyArr.forEach(strategyName => {
    const { regexp, message } = validateStrategy[strategyName];
    if (!_isRegExp(regexp)) {
      throw new Error(`${regexp} is not a regular expression`);
    }
    if (!_isString(message)) {
      throw new Error(`${message} is not a String`);
    }
    if (!regexp.test(value)) {
      resultCache.isValid = false;
      resultCache.message = message;
    }
  });
  return resultCache;
}

/**
 * @function
 * check whether one or more values conform to one or more check rules
 * @param {String | String[]} values
 * @param {String | (Array | String)[]} strategyTwoDimensionArr
 * @param {Boolean?} isMessageString default value: true
 * @returns {Object}
 * {
 *   isValid: Boolean,
 *   message: String | Array
 * }
 */
export function validateValue(values, strategys, isMessageString = true) {
  const {
    valueArr,
    strategyArr,
    isReturnStr
  } = _handleAndCheckArgs(values, strategys, isMessageString);
  const resultCache = {
    isValid: true,
    message: []
  };
  strategyArr.forEach((strategy, index) => {
    strategy = _isArray(strategy) ? strategy : [strategy];
    const { isValid, message } = _validateSingleValue(valueArr[index], strategy);
    if (!isValid) {
      resultCache.isValid = false;
      resultCache.message.push(message);
    }
  });
  if (isReturnStr) {
    resultCache.message = resultCache.message.join('，');
  }
  return resultCache;
}
