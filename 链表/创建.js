function LinkedList() {
    
    let Node = function (element) {
        this.element = element;
        this.next =null;
    };
    
    let length = 0;
    let head = null;
    
    this.append = function (element) {
        let node = new Node(element),
            current;
        if(head === null){
            head = node;
        }
        else {
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.removeAt = function (position) {
        if(position>-1&&position<length){
            let current = head,
                previous,
                index = 0;

            if(position===0){
                head = current.next;
            }
            else {
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        }
        else {
            return null;
        }
    };

    this.insert = function (position,element) {
        if(position>=0&&position<=length){

            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if(position === 0){
                node.next = current;
                head = node;
            }
            else {
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;

            return true;

        }
        else {
            return false;
        }
    };

    this.toString = function() {
        let current = head,
            string = '';
        while(current){
            string += current.element+(current.next?'-':'');
            current = current.next;
        }
        return string;
    };
    
    this.indexOf = function (element) {
        let current = head,
            index = 1;
        while(current){
            if(current.element == element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.size = function () {
        return length;
    };

    this.isEmpty = function(){
        return length === 0;
    };

    this.getHead = function () {
        return head;
    }
}

let linkedList = new LinkedList();
linkedList.append('23');
linkedList.append('34');
linkedList.append('788');
linkedList.append('666');
console.log('打印链表：'+linkedList.toString());
linkedList.insert(3,'abc');
console.log('在第3个位置插入abc：'+linkedList.toString());
linkedList.removeAt(2);
console.log('移除第二的元素：'+linkedList.toString());
console.log('查找abc在：'+linkedList.indexOf('abc'));
console.log(`链表的长度为：${linkedList.size()}`);