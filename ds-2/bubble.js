let arr=[1,4,2,8,345,123,43,32,5643,63,43,123,2,55,1,234,52]
function bubble(brr)
{
    let temp
    for(let i=0;i<brr.length;i++)
    {
        for(let j=0;j<brr.length;j++)
        {
        if(brr[j]>brr[j+1])
        {
            temp=brr[j]
            brr[j]=brr[j+1]
            brr[j+1]=temp
        }
    }
    }
    console.log((brr));
}
bubble(arr)