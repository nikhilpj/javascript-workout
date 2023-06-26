/*
print out program started at the start of code
create a promise that resolves after 3 seconds
log out the promise while its pending
print out program in progress as well

print out step 1 complete when the first promise fullfills
have the first promise return another new promise that will fullfill after 
3 seconds with the message "step 2 complete ".
print out the second message from the second promise after it fullfills("step 2 complete")

*/

 console.log('program started')
 const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('step1 complete as promise fullfilled')
    },3000)
 })
 console.log(promise3)
 console.log('program in progress')

 promise3.then((value)=>{
console.log(value)
 }).then(()=>{
    setTimeout(()=>{
        console.log('step 2 complete as second promise fullfilled')
    },3000)
 })