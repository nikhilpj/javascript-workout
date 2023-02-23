arr=[4,5,2,7,8,1]
function selection(brr)
{
    for(let i=0;i<brr.length;i++)
    {
        let small = i
        for(let j=i+1;j<brr.length;j++)
        {
            if(brr[small]>brr[j])
            {
                let temp= brr[small]
                brr[small] =brr[j]
                brr[j] = temp
            }
        }
    }
    console.log(brr);
}
selection(arr)