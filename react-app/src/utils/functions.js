import { useEffect } from "react";

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zero if month or day is single digit
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}` ;
};

export const useConsole = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export const toUpper = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}


const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  console.log("Date passed to fetchAPI:", date);

  if (!(date instanceof Date)) {
    console.error("Invalid date passed to fetchAPI:", date);
    return [];
  }

  let result = [];
  let random = seededRandom(date.getDate());

  console.log("Random generator initialized for seed:", date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.8) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }

  if (result.length === 0) {
    console.warn("No times generated, adding default time.");
    result.push("18:00");
  }

  console.log("Generated times:", result);
  return result;
}

export function submitAPI(formData) {
  return true;
}


