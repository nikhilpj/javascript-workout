let a=[6,3,4,2,6,8,6]
let b= a.length
for(i=0;i<a.length;i++)
{
    for(j=i;j<a.length;j++)
    {

    
    if(a[j]==6)
    {
        let temp=a[i]
        a[j]=a[j+1]
        a[b-1]=temp
    }
    }
}
console.log(a)