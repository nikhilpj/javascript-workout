/*
create a try block with the following
create a variable called 'number' and initialize it to number 1337
add a random number between 0-1000 to 'number'
log out 'number '
if number is less than 2000
    -throws out an error message 'you lose'
    - log out 'you win'
create a catch block that catches the error and log it   
inside the catch block log out the number as well
what is the issue with this setup 
how can we fix it so we can access nummber in the catch 
*/

let number = 1337
try {
    
    number+= Math.random() * 1000
    console.log('number is',number)
    if(number<2000)
    {
        throw new Error('you lose',number)
    }
    else{
        console.log('you win')
    }
} catch (error) {
    console.error('error is ',error,number)
    
}
console.log('haha')