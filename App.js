
//TASK 1
function compare(a, b) {
    a > b ? console.log(`A is bigger (${a})`) : a==b ? console.log(`They are equal (${a}) (${b})`) : console.log(`B is bigger (${b})`)
}
// compare(5, 5)


//TASK 2
function fromTo() {
    for(let i=1; i<=10; i++) {
        console.log(i)
    }
}
// fromTo()



//TASK 3
function fromToDouble() {
    for(let i=0; i<=10; i+=2) {
        console.log(i)
    }
}
// fromToDouble()



//TASK 4
function fiveRandom() {
    const arr = []
    for(let i=0; i<5; i++) {
        const randomNum = Math.floor(Math.random() * 11)
        console.log(randomNum)
        arr.push(randomNum)
    }
    console.log(arr)
}
// fiveRandom()

