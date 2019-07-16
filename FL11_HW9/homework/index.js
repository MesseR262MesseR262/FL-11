function getNumbers(a) {

  let nums = [];

  for (let i = 0; i < a.length; i++) {

    if (isNaN(+a[i]) === true) {
      continue 
    } 

    nums[i] = +a[i];
    
  }

  for (let i = nums.length - 1; i >= 0; i--) {

    if (nums[i] === undefined) {

      nums.splice(i, 1);

    }
  }

  return nums;

}


function findTypes() {

  let types = {};

  for (let i = 0; i < arguments.length; i++) {

    if (typeof arguments[i] === 'string') {

      types['string'] = 0;
      types['string'] += 1;

    } else if (typeof arguments[i] === 'number') {

      types['number'] = 0;
      types['number'] += 1;

    } else if (typeof arguments[i] === 'object') {

      types['object'] = 0;
      types['object'] += 1;

    } else if (typeof arguments[i] === 'boolean') {

      types['boolean'] = 0;
      types['boolean'] += 1;

    }
  }

  return types;

}


function executeforEach(arr, foo) {

  for (let i = 0; i < arr.length; i++) {

    foo(arr[i]);

  }

}


function mapArray(arr, foo) {

  for (let i = 0; i < arr.length; i++) {

    foo(arr[i]);

  }

} 


function filterArray(arr, foo) {

  let result = [];

  executeforEach(arr, arg => {

    if (foo(arg)) {

      result.push(arg);

    }

  });

  return result;
}


function showFormattedDate(date) {

  let dateInStr = 'Date: ' + date;

  let finalDate = dateInStr.substring(0, 6) + dateInStr.substring(10, 21);

  return finalDate;

}


function canConvertToDate(date) {

  if (typeof date === 'string' 
    && date.length === 19 
    && +date.substring(0, 4) > 0
    && (+date.substring(5, 7) > 0 && +date.substring(5, 7) < 13)
    && (+date.substring(8, 10) > 0 && +date.substring(8, 10) < 31)
    && (+date.substring(11, 13) >= 0 && +date.substring(11, 13) < 60)
    && (+date.substring(14, 16) >= 0 && +date.substring(14, 16) < 60)) {

      return true

  } else { 
    return false 
  }

}


function daysBetween(dateOne, dateTwo) {

  let milInDay = 86400000;

  return Math.round((dateTwo - dateOne)/milInDay);

}


function getAmountOfAdultPeople(data) {

  let current = Date.now();

  let milInDay = 86400000;

  let daysinYear = 365;

  let milinYear = milInDay * daysinYear;

  let adult = 18;

  let numbers = 0;

  for (let i = 0; i < data.length; i++) {

    let age = Math.floor((current - +new Date(data[i]['birthday']))/milinYear);

    if (age >= adult) {
      numbers += 1;
    }
  
  }

  return numbers;

}


function keys(data) {

  let newArr = []

  for (let key in data) {

    newArr.push(key);

  }

  return newArr;

}


function values(data) {

  let newArr = [];

  for (let key in data) {

    newArr.push(data[key])

  }

  return newArr;

}