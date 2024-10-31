//<========================RECURSION====================>
const person = {
  firstName: 'Qudus',
  lastName: 'Oshinaike',
  email: 'llahsmine@gmail.com',
};

// get the keys in the object
const keys = Object.keys(person);
console.log(keys);
//tracking the progress
let count = 0;
function recursion() {
  //Termination or Base condition
  if (count === keys.length) {
    return;
  }
  const fieldName = keys[count];
  const fieldValue = person[fieldName];
  console.log(
    `this is the Field name: ${fieldName} and this is the field name: ${fieldValue}`
  );
  count++;
  console.log('count is now ', count);
  recursion();
}
recursion();

// //<==========================CLOSURE=======================>

// //Banking App=================>

//Outer Function
function bankAccountBalance(initialBalance) {
  let balance = initialBalance;
  return {
    //Object of Inner Functions
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
      }
      return balance;
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
      }
      return balance;
    },
    checkBalance: function () {
      balance;
      return balance;
    },
  };
}
const accbal = bankAccountBalance(300);

console.log(accbal.checkBalance());
console.log(accbal.deposit(530));
console.log(accbal.withdraw(20));

// //Countdown Timer==================>
//Outer function
function countDown(count) {
  let start = count;
  //Inner function
  return function () {
    return start--;
  };
}
const time = countDown(5);
console.log(time());
console.log(time());
console.log(time());
console.log(time());
console.log(time());

// // //===========================FUNCTION EXPRESSION/ARROW FUNCTION==============================>
// // //Prime Numbers============================>

const isPrimeNumber = (limit) => {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      console.log(i);
    }
  }
};
isPrimeNumber(50);

//Muliplication program=================================>
function timesTable(multiplier) {
  let num = 0;
  let multiplesOfMultiplier = [];
  return {
    arrayOfMultiples: function multiples() {
      if (num > 12) {
        return console.log(multiplesOfMultiplier);
      }
      const multiply = num * multiplier;
      num++;
      multiplesOfMultiplier.push(multiply);
      multiples();
    },
    sumOfMultiples: function sum() {
      const sumTotal = multiplesOfMultiplier.reduce((first, curr) => {
        return (first += curr);
      });
      console.log(sumTotal);
    },
  };
}
const multiple = timesTable(3);
multiple.arrayOfMultiples();
multiple.sumOfMultiples();

const studentScores = [[20, 30, 40], [30, 40, 50], [40, 50, 60], 50];
function addUp() {
  const first = studentScores.flat();
  // const first = studentScores.flat().reduce((prev, curr) => {
  //   return prev + curr;
  // });
  console.log(first);
}
addUp();

let score = 0;

let score2 = 0;
let outerArr = null;
function addArrayScores(arr) {
  // declare var for length of array
  if (outerArr === null) {
    outerArr = arr;
    const firstEl = outerArr.pop();
    addArrayScores(firstEl);
  }

  if (arr.length > 0) {
    const currItem = arr.pop();

    score2 += currItem;
    addArrayScores(arr);
  } else if (outerArr.length > 0) {
    const arrEl = outerArr.pop();
    addArrayScores(arrEl);
  }
}

const arrayOfScores = [
  [20, 30, 40],
  [30, 40, 50],
  [40, 50, 60],
];
addArrayScores(arrayOfScores);
console.log(score2);

// find the total score
// initialize a score variable

for (const itemArray of arrayOfScores) {
  console.log(itemArray);
  if (Array.isArray(itemArray)) {
    for (const item2 of itemArray) {
      console.log(item2);
      score = score + item2;
      console.log(score);
    }
  } else {
    score = score + itemArray;
  }
}

/* for (let i = 0; i < arrayOfScores.length; i++) {
  const item = arrayOfScores[i];
} */

console.log('this is the total score: ', score);

//Conversion of numbers to base 2 (Binary)=========================>
//Long cut===================>
let r = 0;
let store = [];
function binaryGap(n) {
  let Q = n;
  return function binaryNum() {
    if (Q <= 0) {
      const binaryStr = store.reverse().join('');
      if (store.length > 0) console.log(binaryStr);
      return;
    }
    r = Q % 2;
    Q = (Q - r) / 2;
    store.push(r);
    binaryNum();
  };
}
const num = 5654;
const binary = binaryGap(num);
binary();

//Shorter Cut===============================>
console.log(num.toString(2));
