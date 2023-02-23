function recursive(n)
{
    if(n <=0)
    {
        console.log("hooray");
        return
    }
    else{
        console.log(n);
        recursive(n-1)
    }
}
recursive(3)