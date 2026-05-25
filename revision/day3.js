// // syncronous statement
// const variable1 = "Ram"
// const variable2 = 2

// console.log(variable1);
// console.log(variable2);

// // asyncronous statement
// setTimeout(
//     () => {
//         console.log("This is an asynchronous statement");
//     }, 
//     0
// );
// console.log("End of program");

// // Promise/Future (any function that can take time)
// const promiseFn = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             () => {
//                 reject("NOT OK")
//             },
//             200 // milliseconds
//         );
//     })
// }

// promiseFn()
// .then(result => {
//     // result is resolved
//     console.log("Success")
//     console.log(result);
// })
// .catch(error => {
//     // error is rejected
//     console.log("Exception")
//     console.log(error);
// });
// console.log("Sakiyo");

// const main = async () => {
//     try{
//         const result = await promiseFn(); // blocks the execution
//         // result is resolved 
//         console.log(result);
//         console.log("Rest of function");
//     }catch(error){
//         // error is rejected
//         console.log("Rejected",error);
//     }
// }

// main();

// Task 1
const isEven = (num) => new Promise(
    (resolve, reject) => {
        if (num % 2 === 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)
const isPositive = (num) => new Promise(
    (resolve, reject) => {
        if (num > 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)
// 1. run these function with async await, sequencially
// 2. run these function with .then and .catch, sequencially

const run = async () => {
    try{
        const evenResult = await isEven(3);
        console.log("Is even:", evenResult);
        const positiveResult = await isPositive(4);
        console.log("Is positive:", positiveResult);
    }catch(error){
        console.log(error);
    }
}
run();
// non blocking sequential execution
isEven(4)
.then(result => {
    console.log("Is even:", result);
    isPositive(4).then(result => {
        console.log("Is positive:", result);
    }).catch(error => {
        console.log("Is positive:", error);
    })
}).catch(error => {
    console.log("Is even:", error);
})

// parallel promise
const parrallelRun = async () => {
    try{
        const [result1, result2] = await Promise.all(
            [
                isEven(4),
                isPositive(-4)
            ]);
        console.log("Is even:", result1);
        console.log("Is positive:", result2);
    }catch(error){
        console.log(error);
    }
}
parrallelRun();

const parrallelRun2 = async () => {
    try{
        const [result1, result2] = await Promise.allSettled(
            [
                isEven(4),
                isPositive(-4)
            ]
        )
        console.log("Is even:", result1, result1.value); // value = resolved
        console.log("Is positive:", result2, result2.value);
    }catch(error){
        console.log(error);
    }
}
parrallelRun2();