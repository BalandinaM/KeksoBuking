'use strict'

const difference = (num) => {//Делает отрицательное число положительным
    return Math.abs(num);
}

const createGeographyPoint = (a, b, value) => {//Выдает рандомное число с плавающей точкой из заданного диапазона 

    let num1 = difference(a); 
    let num2 = difference(b);

    if (num1 < num2) { 
        [num1, num2] = [num2, num1];
    }

    return (Math.random() * (num2 - num1) + num1).toFixed(value);
};

let GeographyPoint = createGeographyPoint(50, -78, 10);
//console.log(GeographyPoint);


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

const getArrNumberAddZero = () => { //Функция возвращает массив неповторяющихся чисел с 0 перед числом.
  let tempArr = (getArrayRandomUniqueNumber(1,10));
  let arrNumberAddZero = [];
  for (let i = 0; i < tempArr.length; i++) {
    arrNumberAddZero[i] = addZeros(tempArr[i]);
  }
 return arrNumberAddZero;
}

const getArrUrl = () => { //воззвращает массив неповторяющихся адресов 
  let tempArr = (getArrNumberAddZero());
  let arrUrl = [];
  for (let i = 0; i <= tempArr.length -1; i++) { //цикл перебирает массив со случайными числами и конкатинирует со строчкой
    arrUrl[i] = `img/avatars/user${tempArr[i]}.png`;
  }
  return arrUrl;
}

const arrUrl = getArrUrl();
console.log(getArrUrl());

/*const aaa = {
};

arrUrl.forEach((avatar, index) => { //из массива адресов делает объект
  aaa[index + 1] = avatar;
});

//let author = {};

console.log(aaa);*/


/////////////////////////////////Создание базы данных

const TITLE = [
  "Первому арендатору три дня в подарок", 
  "Сдам двушку задаром", 
  "Сдается комната на чердаке", 
  "Однокомнатная квартира посуточно", 
  "Дуплекс в аренду",  
  "Трехкомнатная квартира для семьи с детьми"
];

const Price = {
  MIN: 1,
  MAX: 100000,
};

const TYPE = [
  "palace", 
  "flat", 
  "house", 
  "bungalow"
];

const Rooms = {
  MIN: 1,
  MAX: 6,
};

const Guests = {
  MIN: 1,
  MAX: 20,
};

const CHECKIN = [
  "12:00", 
  "13:00", 
  "14:00"
];

const CHECKOUT = [
  "12:00", 
  "13:00", 
  "14:00"
];

const FEATURES = [
  "wifi", 
  "dishwasher", 
  "parking", 
  "washer", 
  "elevator", 
  "conditioner"
];

const DESCRIPTION = [
  "Это описание какого-то жилья, оно без сомнения прекрасно, и полностью удовлетворяет вашим потребностям, и даже превосходит их. Смело оформляйте сделку и будет вам щастье!"
];

const PHOTOS = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg", 
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];


const LOCATION = {
  x: createGeographyPoint(35.65000,35.70000, 5),
  y: createGeographyPoint(139.70000,139.80000, 5),
};

const ADDRESS = LOCATION; 
//console.log(LOCATION);
console.log(ADDRESS);

const createObject = () => {
  return {
    author: {
      avatar: ,
    },
    offer: {
      title: ,
      address: ,
      price: ,
      type: ,
      rooms: ,
      guests: ,
      checkin: ,
      checkout: ,
      features: [],
      discription: ,
      photos: [],
    }
    location: {
      x: ,
      y: ,
    }
  }
};