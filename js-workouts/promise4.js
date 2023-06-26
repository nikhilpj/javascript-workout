/*
print out program started at the start of code
create a promise that resolves after 5 seconds with the value {data:'hello friend',error:null}
log out the promise while its pending
print out program in progress as well

create a first promise chain using the promise above and
print out the resolved value when the first promise fullfills.
have the first promise return another new promise that will fullfill after 2 seconds with
the message 'first promise chain completed'

print out the message from the above promises after it fullfills ('first promise chain complete)

create a second promise chain using the promise above and print out the resolved value when the second
promise chain fullfills.
have this second promise chain return another promise that will fullfill after 10 seconds with the 
message 'second promise chain complete'
print out the message from  the above promise after it fullfills('second promise chain completed')
*/

console.log('program started');
const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({data:'hello friend',error:null})
    },5000)
})
console.log(promise5)
console.log('program in progress')
promise5.then((value)=>{
    console.log(value)
}).then(()=>{
    setTimeout(()=>{
        console.log('first promise chain completed')
    },2000)
})

promise5.then((value)=>{
    console.log(value)
}).then(()=>{
    setTimeout(()=>{
        console.log('second promise chain completed')
    },10000)
})