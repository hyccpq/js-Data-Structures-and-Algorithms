function PriorityQueue() {
    let items = [];
    function QueueElement(element,priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element,priority) {
        let queueElement = new QueueElement(element,priority);

        let added = false;
        for(let i=0;i<items.length;i++){
            if(queueElement.priority < items[i].priority){
                items.splice(i,0,queueElement);
                added = true;
                break;
            }
        }
        if(!added){
            items.push(queueElement);
        }
    };

    this.print = function () {
        for(let i=0;i<items.length;i++){
            console.log(`${items[i].element}-${items[i].priority}`);
        }
    };
}
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("hehe",3);
priorityQueue.enqueue("yahaha",5);
priorityQueue.enqueue("pik",2);
priorityQueue.print();