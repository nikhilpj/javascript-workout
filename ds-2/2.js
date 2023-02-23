function insert(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        for(let j=i;j>0;j--)
        {
            if(arr[j]<arr[j-1])
            {
                let temp = arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}
let arr=[-7,8,4,7,2,0]
console.log(insert(arr));