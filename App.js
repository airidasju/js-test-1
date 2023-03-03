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
  const myArr = [...Array(Math.floor(Math.random() * (30 - 20 + 1) ) + 20)].map(() => Math.floor(Math.random() * (30 - 10 + 1) ) + 10);
  const highestNum = myArr.reduce((prev, curr) => prev > curr ? prev : curr)
  console.log(myArr, highestNum);
}
// task6()