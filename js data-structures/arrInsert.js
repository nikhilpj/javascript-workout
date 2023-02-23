arr=[1,2,3,4]
function insert(brr,index,data)
{
    brr.length = brr.length+1
    console.log("length ",brr.length);
     for(let i=brr.length-1;i>index;i--)
     {
         brr[i]=brr[i-1]
     }
     brr[index]=data
    console.log(brr);
}
insert(arr,2,5)