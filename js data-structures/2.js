let stack = function(){
    this.count = 0
    this.storage={}
    this.push = function(value)
    {
        this.storage[this.count]=value
        this.count++
        console.log(value)
    }
    this.pop = function()
    {
        this.count--
        var result = this.storage[this.count]
        delete this.storage[this.count]
        console.log("after popping",obj1);
        return result
    }
    this.size = function(){
        return this.count
    }
    this.peek = function(){
        return this.s
    }
}
var obj1 = new stack()
obj1.push(2)
obj1.push(3)
obj1.push(4)
console.log(obj1)
obj1.pop()
