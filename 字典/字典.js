class Dictionary {
    constructor(){
        this.items = {};
    }

    has(key){
        return key in this.items;
    }

    set(key,value){
        this.items[key] = value;
    }

    delete(key){
        if(this.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key){
        return this.has(key)?this.items[key]:undefined;
    }

    values(){
        let values = [];
        for(let k in this.items){
            if(this.has(k)){
                values.push(this.items[k]);
            }
        }
        return values;
    }

    size(){
        return Object.keys(this.items).length;
    }
    clear(){
        this.items = {};

    }

    keys(){
        return Object.keys(this.items);
    }

    getItems(){
        return this.items;
    }

}

let dictionnary = new Dictionary();
dictionnary.set('he','ieskljfj@ies.com');
dictionnary.set('woidh','888999@wiohd.com');
dictionnary.set('cnn','huochge@qq.com');
console.log(`存在he？${dictionnary.has('he')}\n长度？${dictionnary.size()}\n索引为 ${dictionnary.keys()}\n值为 ${dictionnary.values()}\n获取cnn ${dictionnary.get('cnn')}\n ${dictionnary.getItems()}`);