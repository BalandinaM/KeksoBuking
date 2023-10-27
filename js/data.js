'use strict'

import { getRandomNumberFloatPoint, returnRandomNumber, getArrUrl, getArrayRandomLenght, getRandomArrayElement, getRandomElementArrayDeleteIt } from "./util.js";

const arrUrl = getArrUrl(1,10);

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

const DESCRIPTION = 
  "Это описание какого-то жилья, оно без сомнения прекрасно, и полностью удовлетворяет вашим потребностям, и даже превосходит их. Смело оформляйте сделку и будет вам щастье!";

const PHOTOS = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg", 
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

const X_GeographyPoint = {
  MIN: 35.65000,
  MAX: 35.70000,
  VALUE: 5,
};

const Y_GeographyPoint = {
  MIN: 139.70000,
  MAX: 139.80000,
  VALUE: 5,
};

const countObjectDataBase = 10;

const createObject = () => {
    const randomLocationX = getRandomNumberFloatPoint(X_GeographyPoint.MIN, X_GeographyPoint.MAX, X_GeographyPoint.VALUE);
    const randomLocationY = getRandomNumberFloatPoint(Y_GeographyPoint.MIN, Y_GeographyPoint.MAX, Y_GeographyPoint.VALUE);
    const randomAddress = randomLocationX + ', ' + randomLocationY;
  
    return {
      author: {
        avatar: getRandomElementArrayDeleteIt(arrUrl),
      },
      offer: {
        title: getRandomArrayElement(TITLE),
        address: randomAddress,
        price: returnRandomNumber(Price.MIN, Price.MAX),
        type: getRandomArrayElement(TYPE),
        rooms: returnRandomNumber(Rooms.MIN, Rooms.MAX),
        guests: returnRandomNumber(Guests.MIN, Guests.MAX),
        checkin: getRandomArrayElement(CHECKIN),
        checkout: getRandomArrayElement(CHECKOUT),
        features: getArrayRandomLenght(FEATURES),
        description: DESCRIPTION,
        photos: getArrayRandomLenght(PHOTOS),
      },
      location: {
        x: randomLocationX,
        y: randomLocationY,
      }
    }
  };
  
  //console.log(createObject());
  
  const dataBaseObject = new Array(countObjectDataBase).fill(null).map(() => createObject());
  
  //console.log(dataBaseObject);

  export { dataBaseObject };