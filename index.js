
Array.prototype.customMap = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        result.push(cb(this[i],i,this));
    }
    return result;
}


Array.prototype.customFilter = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
         if(cb(this[i],i,this)){
            result.push(this[i])
         }
    }
    return result;
}

Array.prototype.customReduce = function(cb , initialValue){
    let accumulator = initialValue;
    for(let i=0;i<this.length;i++){
        // here means if user provide the initial value then we directly call cb with that accumulator  else we have to initial value in that accumulator
         accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i];
    }
    return accumulator;
}

Array.prototype.customCall = function(context ,...args){
    if(typeof this !== "function"){
        throw new Error(this + "It is not callable")
    }
    context.fn = this;
    context.fn(...args)
}

Array.prototype.customApply = function(context= {}, args = [] ){
    if(typeof this !== "function"){
        throw new Error(this + "It is not callable")
    }
    if(!Array.isArray(args)){
        throw new TypeError("createListFromArrayLike called on non-object")
    }
    context.fn = this;
    context.fn(...args)
}

Array.prototype.customBlind = function(context ={} , ...args){
    if(typeof this !== "function"){
        throw new Error(this + "cannot be bound as its not callable")
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args , ...newArgs)
    }
}

Array.prototype.customFlat = function(targetDepth){
    let result = [];
    flatArray(this,targetDepth,result);
    return result;
}
function flatArray(node , targetDepth ,result){
    if(Array.isArray(node)){
        if(targetDepth > 0){
            for(let i=0;i<node.length;i++){
               flatArray(node[i],targetDepth - 1 , result)
            }
        }else{
           for(let i=0;i<node.length;i++){
              result.push(node[i])
           }
        }
    }else{
        result.push(node)
    }

}

function sumArray(array){
    return array.customReduce((acc,curr)=> acc + curr)
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    customApply,
    customBlind,
    customCall,
    customFilter,
    customFlat,
    customMap,
    customReduce,
    randomInRange,
    reverseString,
    sumArray
}