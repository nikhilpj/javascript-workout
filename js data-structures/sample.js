let sample=[]
let word = "power"
let rword=[]
for(i=0;i<word.length;i++)
{
    sample.push(word[i])
    console.log(sample[i])
}
console.log(sample);
for(i=0;i<word.length;i++)
{
    rword+= sample.pop()
    console.log(sample);
}
console.log("this is reverse",rword);
