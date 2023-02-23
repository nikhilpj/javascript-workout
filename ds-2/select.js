let arr=[9,4,7,8,2,6,3]
function selection(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let small=i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[small]>arr[j])
            {
                let temp=arr[small]
                arr[small]=arr[j]
                arr[j]=temp
            }
        }
    }
}
console.log(arr)
selection(arr)
console.log(arr);
