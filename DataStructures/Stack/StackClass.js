class Stack{
    constructor(){
        this.items = []
    }

    //push
    push(val){
        this.items.push(val)
        console.log(this.items)
    }

    //pop
    pop(){
        if (this.isEmpty()) {
            return "already empty";
        }
       return this.items.pop()
    }
    //peak
    peak(){
        return this.items[this.items.length - 1]
    }
    //isEmpty()
    isEmpty(){
        return this.items.length == 0
    }
}

module.exports = {Stack}


// const stack = new Stack();
// stack.push(20)
// stack.push(20)
// console.log(stack.isEmpty())
// stack.pop()
// stack.pop()
// console.log(stack.isEmpty())