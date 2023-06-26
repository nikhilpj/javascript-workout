/*
assign the following object to a variable called 'user':{name:'batman',age:24,setting:{color:'blue'}}
log out 'creating user'
try to log out user.profile.color
log out user created
run the code and observe the behaviour
how could you fix the code without changing steps 1-4 or the user object.

*/

const user = {
name:'batman',
age:24,
setting:{
    color:'blue'
}
}
console.log('creating user')
console.log('user.profile.color is',user?.profile?.color);
