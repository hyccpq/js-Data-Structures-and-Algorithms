class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null;

    };
    append(element){
       let node = new Node(element),
           current;
       if(this.head===null){
           this.head = node;
       }
       else {

           current = this.head;

           console.log(current.next);
           while(current.next){

               current = Node.next;

           }
       }

       this.length++;
    };
    insert(position,element){

    };
    removeAt(position){

    };
    isEmpty(){

    };
    size(){

    };
    getHead(){

    };
    toString(){

    };
    print(){

    };
}