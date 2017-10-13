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


function parenthesesChecker(symbols) {
    var stack = new Stack([]),
        balanced = true,
        symbol,top,
        opens = '([{',
        closers = ')]}';

    for(var i=0;i<symbols.length && balanced;i++){
        symbol = symbols.charAt(i);
        if(opens.indexOf(symbol) >= 0){
            stack.push(symbol);
        }
        else {
            top = stack.pop();
            if(!(opens.indexOf(top) === closers.indexOf(symbol))){
                balanced = false;
            }

        }
    }
    if(balanced && stack.isEmpty()){
        return true;
    }
    return false;
}

console.log(parenthesesChecker('([])'));
console.log(parenthesesChecker('[(])'));
console.log(parenthesesChecker('{{([][])}()}'));
console.log(parenthesesChecker('[{()]'));
