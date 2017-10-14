var arr = [5,1,2,7];
arr.forEach(function(item,index) {
    console.log(index,item);
});
var result = arr.every(function (t, number) {
    if(t<3){
        return true;
    }
});
console.log(result);
var result1 = arr.some(function (t, number) {
    if(t<3){
        return true;
    }
});
console.log(result1);
var result2 = arr.sort(function(a,b) {
    return a-b;
});
console.log(result2);

var result3 = arr.map(function (item, index) {
    return '<b>'+item+'|'+index+'</b>'
});
console.log(result3);

var result4 = arr.filter(function (t, number) {
    if(t<3){
        return true;
    }
});
console.log(result4);