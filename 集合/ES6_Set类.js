let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3).add(4).add(5);
let setB = new Set();
setB.add(4).add(5).add(6).add(7);
console.log(setA.values());
console.log(setA.has(1));
console.log(setA.size);

// 并集
let unionAB = new Set();
for(let x of setA)unionAB.add(x);
for(let x of setB)unionAB.add(x);
console.log(unionAB);

// 交集
let intersection = function (setA,setB) {
    let intersectionSet = new Set();
    for(let x of setA){
        if(setB.has(x)){
            intersectionSet.add(x);
        }
    }
    return intersectionSet;
};
console.log(intersection(setA,setB));

// 差集
let difference = function (setA,setB) {
    let differenceSet = new Set();
    for(let x of setA){
        if(!setB.has(x)){
            differenceSet.add(x);
        }
    }
    return differenceSet;
};
console.log(difference(setA,setB));