/*
print out program started at the start of your code.
create a promise that resolves after 3 seconds and rejects after 2 seconds.
Log out the promise while its pending
print out program in progress as well

print out program complete if the promise fullfills
print out program failed if the promise rejected

*/

let promise2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve()
   },3000) 
})

let promise3 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    reject()
   },2000) 
})

console.log("program started")
console.log(promise2)
console.log(promise3)

promise2.then(()=>{
    console.log('promise2 fullfilled')
})

promise3.catch(()=>{
    console.log('promise3 rejected')
})