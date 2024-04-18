class LinkedList{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }

        this.tail = this.head
        this.length = 1
    }

    addNode(data){
        let newNode = {
            value:data,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length+=1
    }
}

let ll = new LinkedList(10)


ll.addNode(20)
ll.addNode(30)
ll.addNode(40)

console.log(ll)
