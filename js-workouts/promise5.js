/*
create a promise that resolve with the number 10 after 3 seconds
create a promise that resolves with the number 20 after 5 seconds

log out the sum of these two values after they both  resolve
*/
let x,y
const promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },3000)
    
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },5000)
})

// promise1.then((value)=>{
//     console.log('promise 1 value',value)
//     x=value
// })
// promise2.then((value)=>{
//     console.log('promise 2 value',value)
//     y=value
//     console.log(x+y)
// })

Promise.all([promise1,promise2]).then((values)=>{
    console.log(values[0]+values[1])
})



