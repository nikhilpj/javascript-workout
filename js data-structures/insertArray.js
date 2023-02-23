brr = [1,2,3,4,5]
function insert(arr,data,index)
{
    arr.length=arr.length+1
    console.log(arr.length);
    for(i=arr.length-1;i>index;i--)
    {
        arr[i]=arr[i-1]
    }
    arr[index]= data
    console.log(arr);
}
insert(brr,12,2)