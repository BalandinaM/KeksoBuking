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
console.log(GeographyPoint);


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
