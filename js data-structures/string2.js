function reverse1(str){
    var r = "";
    for(var i = str.length - 1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }
  let s="mal"
  console.log(reverse1(s))
  