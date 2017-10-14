// // ES6
const items = new WeakMap();
class Stack{
    constructor(arr){
        items.set(this,arr);
    }
    push(element){
        let s = items.get(this);
        s.push(element);
        return s;
    }
    pop(){
        let s = items.get(this);
        let r = s.pop();
        return r;
    }
    isEmpty(){
        let s = items.get(this);
        return s.length === 0;
    }
}
// ES5~
function Stack(arr) {
    this.items = arr;
}
Stack.prototype.push = function (element){
    this.items.push(element);
};
Stack.prototype.pop = function () {
    return this.items.pop();
};
Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};



function baseConverter(decNumber,base) {
    
    var remStack = new Stack([]),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';
    
    while (decNumber>0){
        rem = Math.floor(decNumber%base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/base);
        // console.log(decNumber);
    }
    
    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }
    
    return baseString;
}
console.log(baseConverter(233,16));
console.log(baseConverter(250,2));
console.log(baseConverter(500,8));