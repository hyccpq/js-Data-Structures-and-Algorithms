class Set {
    constructor(){
        this.items = {};
    }

    has(value){
        return this.items.hasOwnProperty(value);
    }

    add(value){
        if(!this.has(value)){
            this.items[value] = value;
            return true;
        }
        return false;
    }

    remove(value){
        if(this.has(value)){
            delete this.items[value];
            return true;
        }
        return false;
    }

    clear(){
        this.items = {};
    }

    size(){
        return Object.keys(this.items).length;
    }

    values(){
        let values = [];
        for(let i=0, keys=Object.keys(this.items);i<keys.length;i++){
            values.push(this.items[keys[i]]);
        }

        return values;
    }

    union(otherSet){
        let unionSet = new Set();

        let values = this.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    instersection(otherSet){
        let instersectionSet = new Set();

        let values = this.values();
        for(let i=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                instersectionSet.add(values[i]);
            }
        }

        return instersectionSet;
    }

    difference(otherSet){
        let differenceSet = new Set();

        let values = this.values();
        for(let i=0;i<values.length;i++) {
            if (otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    }
}

let setA = new Set(),
    setB = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
// console.log(setA);
setB.add(2);
setB.add(3);
setB.add(4);
let unionAB = setA.union(setB);
console.log(unionAB.values());
