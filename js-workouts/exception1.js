/*
log out program started
throw out an error (uh oh)
log out program complete

create a try /catch block that console error message
run program again and see the difference
*/
try{
    console.log('program started')
    throw new Error('uh oh')
    
}

catch(error){
console.log('error is ',error)
}
console.log('program complete')
