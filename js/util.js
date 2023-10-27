'use strict'

const difference = (num) => {//Делает отрицательное число положительным
    return Math.abs(num);
}

const getRandomNumberFloatPoint = (a, b, value) => {//Выдает рандомное число с плавающей точкой из заданного диапазона 

    let num1 = difference(a); 
    let num2 = difference(b);

    if (num1 < num2) { 
        [num1, num2] = [num2, num1];
    }

    return (Math.random() * (num2 - num1) + num1).toFixed(value);
};

const returnRandomNumber = (min, max) => {//Функция, возвращающая случайное целое число из переданного диапазона включительно.

    if (min < 0 || max < 0) {
      console.log("Error!!! Передаваемые значения должны быть положительными!")
      return -1;
    }
    if (max < min) {
      [min, max] = [max,min];
    }
    min = Math.ceil(min); //округление до ближайшего большего целого
    max = Math.floor(max);//округление до ближайшего меньшего целого
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  };

const addZeros = function(n, needLength) { //Функция добавляет 0 перед числом. На входе принимает число и необходимую длину строки, по умолчанию 2
  needLength = needLength || 2;
  n = String(n);
  while (n.length < needLength) {
    n = "0" + n;
  }
  return n
}

const getArrayRandomUniqueNumber = (min, max) => { //Функция возвращает массив неповторяющихся чисел в заданном диапазоне
  let totalNumbers 		= max - min + 1,
    arrayTotalNumbers 	= [],
    arrayRandomUniqueNumbers 	= [],
    tempRandomNumber;

  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }

  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.floor(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomUniqueNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }

  return arrayRandomUniqueNumbers;
};
  
//console.log(getArrayRandomUniqueNumber(1,10));

const getArrNumberAddZero = (min, max, needLength) => { //Функция возвращает массив неповторяющихся чисел с 0 перед числом.
  let tempArr = (getArrayRandomUniqueNumber(min, max));
  let arrNumberAddZero = [];
  for (let i = 0; i < tempArr.length; i++) {
    arrNumberAddZero[i] = addZeros(tempArr[i], needLength);
  }
  return arrNumberAddZero;
};

//console.log(getArrNumberAddZero(1, 5));

const getArrUrl = (min, max, needLength) => { //воззвращает массив неповторяющихся адресов 
  let tempArr = (getArrNumberAddZero(min, max, needLength));
  let arrUrl = [];
  for (let i = 0; i <= tempArr.length -1; i++) { //цикл перебирает массив со случайными числами и конкатинирует со строчкой
    arrUrl[i] = `img/avatars/user${tempArr[i]}.png`;
  }
  return arrUrl;
};

const getArrayRandomLenght = (arr) => {
  const maxLength = arr.length;
  const randomLength = returnRandomNumber(1, maxLength);
  const array = [];

  while (array.length < randomLength) {
    const randomIndexEl = returnRandomNumber(0, maxLength - 1);
    const el = arr[randomIndexEl];
    
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
};

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const getRandomElementArrayDeleteIt = (elements) => {//берет рандомный элемент из массива а затем удаляет его из массива
  let el = elements[_.random(0, elements.length - 1)];
  elements.splice(elements.indexOf(el), 1);
  return el;
};

export {getRandomNumberFloatPoint, returnRandomNumber, getArrNumberAddZero, getArrUrl, getArrayRandomLenght, getRandomArrayElement, getRandomElementArrayDeleteIt};