function bubble(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
let arr=[5,2,8,7,3,1]
console.log(bubble(arr));