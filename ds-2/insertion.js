function insertion(brr)
{
    for(let i=1;i<brr.length;i++)
    {
        for(let j=i;j>0;j--)
        {
            if(brr[j]<brr[j-1])
            {
                let temp = brr[j]
                brr[j]=brr[j-1]
                brr[j-1]=temp
            }
        }
    }
    console.log((brr));
}
let arr =[1,5,3,8,255,344,2,9]
insertion(arr)