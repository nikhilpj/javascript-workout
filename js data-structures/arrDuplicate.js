let arr=[1,2,3,2,4,5,4]
let brr=[]
let len = arr.length
for(let i=0;i<len;i++)
{
    if(brr.indexOf(arr[i])===-1)
    {
        brr.push(arr[i])
    }
}
console.log(brr);