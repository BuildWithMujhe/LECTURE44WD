// let obj = {
//     name: "Abhinav",
//     age: 25,
//     weight: 85,
//     height: "6ft 1in",
//     greet: function(){
//         console.log("hello jee kaise ho saare");
//     }
// };

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// Creation of Arrays
// let arr = [1,2,3,4,5];
//array constructor
// let brr = new Array('Abhinav',1,true);
// brr.push('Kumar');
// brr.pop();
// brr.shift();
// brr.unshift('Abhinav Kumar');
// brr.push(20);
// brr.push(40);
// brr.push(70);

// console.log(brr.slice(2,4));

// brr.splice(1,0,'kunal');
// console.log(brr);

// console.log(brr[2]);
// console.log(brr);

// console.log(typeof(brr));

// let arr = [10,20,30];

// arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray)

// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     return number%2 === 0;
    // if(number%2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
// });

// console.log(evenArray)

// let arr = [1,2,'love','kunal', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans);

// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// }, 0);

// console.log(ans);


// let arr = [9,1,7,4,2,8];
// arr.sort();

// console.log(arr);

// let arr =[9,1,7,4,2,8];
// arr.sort();

// console.log(arr);

// console.log(arr.indexOf(9));

// let arr = [10,20,30];

// let length = arr.length;
// console.log("Length: ", length);
//traditional loop

// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

// arr.forEach((value, index) => {
//     console.log("Number: ", value, "Index: ", index);
// })

// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "Abhinav";

// for(let val of fullName) {
//     console.log(val);
// }

// let arr = [10,20,30,40,50];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for(let index=0; index<len; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);





