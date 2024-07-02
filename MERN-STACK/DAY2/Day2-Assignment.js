//"use strict"

//Q.1)
function arrayOfNum(arr) {
    const [first] = arr;
    const last = arr[arr.length - 1]
    console.log(first);
    console.log(last);
}
const arr = [1, 2, 3, 4, 7, 9];
arrayOfNum(arr);

//Q.2)
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
const numb = [1, 2, 3, 4, 5];
const sqrNum = squareNumbers(numb);
console.log(sqrNum);

//Q.3)
//Output
//undefined
//Hello, World!
//Explanation
//i) Hoisting: In JavaScript, variable declarations using 'var' are hoisted to the top of their containing
//scope.However, only the declaration is hoisted, not the initialization. This means that the variable 'foo'
//is declared at the top of its scope, but its assignment(foo = "Hello, World!") remains in place.

//ii) First console.log(foo): At this point, 'foo' has been declared but not yet initialized,
//so its value is undefined. This is why, the first console.log(foo); outputs: undefined.

//iii) Variable Assignment: After the first 'console.log(foo)', the line foo = "Hello, World!";
//is executed, assigning the value "Hello, World!" to foo.

//iv) Second console.log(foo): Now 'foo' has been assigned the value "Hello, World!",
//the second 'console.log(foo)'; outputs: Hello, World!.

//Q.4)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let e = 27;
let mergedArr = [e, ...arr1, ...arr2];
console.log(mergedArr);

//Q.5)
const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 15 }
];
function getNames(users) {
    return users.filter(user => user.age > 18).map(user => user.name);
}
const adultUsers = getNames(users);
console.log(adultUsers);

//Q.6)
function calculate(num) {
    return num.reduce((acc, curr) => ({
        sum: acc.sum + curr,
        product: acc.product * curr
    }), { sum: 0, product: 1 });
}
var num = [1, 2, 3, 4, 5];
console.log(calculate(num));

//Q.7)
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
const strings = ["apple", "banana", "mango", "pineapple", "orange"];
console.log(sortByLength(strings));

//Q.8)
function findGreaterNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            return i;
        }
    }
    return -1;
}
var num = [5, 7, 12, 3, 19];
console.log(findGreaterNum(num)); //2

//Q.9)
function removeElement(arr) {
    const newArray = arr.slice(0);
    const rem = newArray.splice(2, 1);

    console.log("New array:", newArray);
    console.log("Removed Element:", rem[0]);
}
const array = [1, 2, 3, 4, 5];
removeElement(array);

//Q.10)
function concatenate(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }
    return arr1;
}
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
console.log(concatenate(a1, a2));