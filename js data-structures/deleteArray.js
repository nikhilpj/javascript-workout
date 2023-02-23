arr = [1,2,3,4,5,6]
function deleteElement(brr,index)
{
for(i=index;i<brr.length;i++)
{
    brr[i]=brr[i+1]
}
brr.length = brr.length-1
console.log(brr);
}
deleteElement(arr,2)
