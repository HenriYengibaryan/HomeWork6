//1 1 Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value, concat the values.
function obj(x){
    let result={}
    for(let key in x){
        result[x[key]]=key
    } return result
}

//2. Given two objects. Write a function that performs shallow compare.
function obj(x,y) {
    for(let key in x){
        if (x[key]!==y[key]) {
            return false
            
        }for(let key in y){
            if(y[key]!==x[key]){
                return false
            }
        }
    }
    return true
}



//3. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
//word&quot;) is a word or phrase without a repeating letter.
function string(x) { 
    let count=0
                   for(let i = 0 ; i<x.length; i++){
          x[i]
          for(let j=0;j<x.length;j++){
              if(x[i]===x[j]){
                  count++
              }else{
                  true
              } }
              if(count>1){
                  return false
                  break
              }
                       count=0
          
         
      } 
                       
      return true
      return
  }