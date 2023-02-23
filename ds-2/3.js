function select(arr)
{

    for(let i=0;i<arr.length;i++)
    {
        let small= i
        for(let j=i+1;j<arr.length;j++)
        {
            if (arr[small]>arr[j])
            {
                let temp=arr[small]
                arr[small]=arr[j]
                arr[j]=temp
            }
        }
    
    }
    return arr
}
let arr=[-3,5,8,1,0,4]
console.log(select(arr))