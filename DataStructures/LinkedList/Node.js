class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/* let n1 = new Node(100);
let n2 = new Node(200);
let n3 = new Node(300);
n1.next = n2
n2.next = n3
// console.log(n1);

function pll(head){
    // if(head.next == null){
    //     return 
    // }
    // console.log(head.data)
    // return pll(n1.next)
    while(head != null){
        console.log(head.data)
        head = head.next
    }
}

pll(n1) */


class LinkedList{
    constructor(){
            this.head = null
            this.size = 0
    }

    //Add 
    addNode(data){
        this.head = new Node(data , this.head)
    }

    traverseLL(){
        while(this.head != null){
            console.log(this.head.data)
            this.head = this.head.next
        }
    }
}

let ll = new LinkedList()
ll.addNode(10)
ll.addNode(20)
// console.log(ll)
ll.traverseLL()