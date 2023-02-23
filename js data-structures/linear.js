arr=[1,3,5,6,8,2]
function linear(brr,element)
{
    let n = brr.length
    let status=false
    for(i=0;i<n;i++)
    {
        if(brr[i]==element)
        {
            console.log("element is at index ",i);
            status=true
        }
    }
    if(status==false){
        console.log("elemt is not present");
    }
}
linear(arr,2)