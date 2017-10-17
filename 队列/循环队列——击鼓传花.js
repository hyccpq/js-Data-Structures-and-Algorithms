function Queue() {
    let items = [];
    this.enqueue = function (element){
        items.push(element);
    };
    this.dequeue = function () {
        return items.shift();
    };
    this.size =function () {
        return items.length;
    };
}
function hotPotato(nameList,num) {
    let queue = new Queue();
    for(let i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while(queue.size() > 1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' pass');
    }

    return queue.dequeue();
}

let names = ['Kalecgos','Alextrasa','chacha','me'];
let winner = hotPotato(names,18);
console.log('the winner is '+winner);