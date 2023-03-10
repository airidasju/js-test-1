//TASK 1
function task1(a, b) {
  a > b
    ? console.log(`A is bigger (${a})`)
    : a == b
    ? console.log(`They are equal (${a}) (${b})`)
    : console.log(`B is bigger (${b})`);
}
// task1(5, 5)

//TASK 2
function task2() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// task2()

//TASK 3
function task3() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
// task3()

//TASK 4
function task4() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 11);
    console.log(randomNum);
    arr.push(randomNum);
  }
  console.log(arr);
}
// task4()

//TASK 5
function task5() {
  let i = 0;
  while (i < 10) {
    i == 9 ? console.log(5) : console.log(Math.floor(Math.random() * 11));
    i++;
  }
}
// task5()

//TASK 6
function task6() {
  const myArr = [...Array(Math.floor(Math.random() * (30 - 20 + 1)) + 20)].map(
    () => Math.floor(Math.random() * (30 - 10 + 1)) + 10,
  );
  const highestNum = myArr.reduce((prev, curr) => (prev > curr ? prev : curr));
  console.log(myArr, highestNum);
}
// task6()

//TASK 7
function task7() {
  const letters = ['A', 'B', 'C', 'D'];
  const myArr = [...Array(100)].map(
    () => letters[Math.floor(Math.random() * 4)],
  );

  const unique = {};

  myArr.forEach((el) => {
    unique[el] = (unique[el] || 0) + 1;
  });
  console.log(myArr, unique);
}
// task7();

//TASK 8
function task8(a, b) {
  if (
    (typeof a == 'number' && typeof b == 'number') ||
    (typeof a == 'object' && typeof b == 'object')
  ) {
    if (typeof a == 'number') {
      const sum = a + b;
      console.log(sum);
      return sum % 2 == 0 ? sum : console.log('Sum is not even');
    } else {
      const sum = a.length + b.length;
      console.log(sum);
      return sum % 2 == 0 ? sum : console.log('Sum is not even');
    }
  } else {
    console.log(`They are not of the same type`, typeof a, typeof b);
  }
}
// task8(5, 5);

//TASK 9
function task9(number) {
  let isPrime = true;
  if (number < 2) {
    console.log('Number is less than 2');
    return number;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number`);
    return number;
  } else {
    console.log(`${number} is a not prime number`);
    return number;
  }
}
//   task9(45);

//TASK 10
function task10(phone) {
  const result = [];
  let count = 0;
  for (let i = 0; i < 10; i++) {
    if (typeof phone[i] !== 'number') {
      console.log('wrong input', phone[i]);
      return;
    }
  }
  const template = '(XXX) XXX-XXXX'.split('');
  console.log(template);
  for (let i = 0; i < template.length; i++) {
    if (template[i] !== 'X') {
      result.push(template[i]);
      count++;
    } else {
      result.push(phone[i - count]);
    }
  }
  const phoneFinished = result.join('');
  console.log(phoneFinished);
  return phoneFinished;
}
// task10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Nelabai elegant kodas, bet veikia :D
