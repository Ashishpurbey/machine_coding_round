// A polyfill is a piece of code that provides the functionality that is not natively available in certain web browsers


const ar=[1,2,3,4,5]

//simulate browser incompatibility
Array.prototype.forEach=null;

if(!Array.prototype.forEach){
    Array.prototype.forEach = function(callbackfunction){
        for(let val of this)callbackfunction(val);
    }
}

array.forEach((val)=>{
    console.log(val*2);
})