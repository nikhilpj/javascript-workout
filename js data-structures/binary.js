arr = [1,2,3,4,5,6,7]
function binary(brr,target)
{
   let low = 0,high = brr.length-1
   while(low<=high)
   {
    mid = Math.floor((low+high)/2)
    if(brr[mid]==target)
    {
        console.log("element found at ppsition ",mid);
        return mid
    }
    else if(brr[mid]<target)
    {
        low = mid+1
    }
    else {
        high = mid-1
    }
   
    
   }
   console.log("element not found");

}
binary(arr,5)