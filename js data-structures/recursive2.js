function recursive(n,total=0)
{
    if(n<=0)
    {
        console.log(total);
        return total
    }
    else{
       recursive(n-1,total+n)
    }
}
recursive(4)