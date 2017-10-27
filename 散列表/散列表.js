function HashTable() {
    let table = [];
    let loseloseHashCode = function (key) {
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash % 23;
    };

    this.put = function (key,value) {
        let position = loseloseHashCode(key);
        console.log(`${position}-${key}`);
        table[position] = value;
    };

    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };
}

let hash = new HashTable();
hash.put('Ganda','ganda@email.com');
hash.put('JOJO','jojo@email.com');
hash.put('cnn','seish@ooxx.com');

console.log(hash.get('JOJO'));