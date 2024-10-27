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

//<==========================CLOSURE=======================>

//Banking System=================>

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

//Countdown Timer==================>
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

//Summation of numbers in 3X3 matrix====================>
// Outer Function
function addUp() {
  const studentScores = [
    [20, 30, 40],
    [30, 40, 50],
    [40, 50, 60],
  ];
  return {
    // Object of Inner functions
    first: function () {
      const getScore = studentScores[0]; // This have access to the variable (studentScores) in the outer fucntion (addUp)
      const grand = getScore.reduce((prev, curr) => {
        return prev + curr;
      });
      return grand;
    },
    second: function () {
      const getScore = studentScores[1]; // This have access to the variable (studentScores) in the outer fucntion (addUp)
      grand = getScore.reduce((prev, curr) => {
        return prev + curr;
      });
      return grand;
    },
    third: function () {
      const getScore = studentScores[2]; // This have access to the variable (studentScores) in the outer fucntion (addUp)
      grand = getScore.reduce((prev, curr) => {
        return prev + curr;
      });
      return grand;
    },
  };
}
const total = addUp();

console.log(total.first() + total.second() + total.third());

//===========================FUNCTION EXPRESSION/ARROW FUNCTION==============================>
//Prime Numbers============================>

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

//To be continued
