arr=[1,2,3,4]
function push(brr,index,num)
{
    brr.splice(index,0,num)
    console.log(brr);
}


push(arr,2,10)