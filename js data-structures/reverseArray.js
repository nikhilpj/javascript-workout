brr=[1,2,3,4,5,6]
function reverse(arr){
    
    for(i=0;i<arr.length/2;i++)
    {
        let temp = arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]= temp
        

    }
    console.log(brr);
}
reverse(brr)
