function Object(obj,fn) {
    this.obj=obj;
    this.fn = fn;
}
Object.prototype.traversal = function () {
    if(this.obj instanceof Array){
        this.obj.forEach(function (item,index) {
            this.fn(item,index);
        }.bind(this));
    }
    else {
        for(var key in this.obj){
            this.fn(key,this.obj[key]);
        }
    }
};
function forEach(obj,fn) {
    var object = new Object(obj,fn);
    return object.traversal();
}
forEach({a: 234, b: 435},function (key,value) {
    console.log(key,value);
});
forEach([1,2,34,56],function (index,item) {
    console.log(index,item);
});
