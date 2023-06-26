/*
create a loop that loops 10 times 
on each loop print out the loop number
on loop number 5 throw out an error object 'boom'
catch the error and console.error the loop number
make sure loop goes out to 10
*/

for(let i=1;i<=10;i++)
{
    
    try{
        console.log(i)
   
    if(i===5)
    {
        throw new Error('boom')
    }
}
catch(error){
console.error(`error is ${error} in loop ${i}`)
}    
}