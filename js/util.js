const getRandomInteger = (min, max) => {

  if (Math.sign(max) === -1 || Math.sign(min) === -1 || max === min || max < min) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

export { getRandomInteger, checkStringLength, getRandomArrayElement };