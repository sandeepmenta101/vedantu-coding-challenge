class Queue{
    #max;
    constructor(max){
        this.items = [];
        this.#max = max;
    }
    enqueue(val){
        this.items.push(val);
        return this;
    }

    dequeue(){
        this.items.shift();
        return this;
    }

    maxCapacity(){
        if(this.items.length === this.#max){
            return true;
        }
        return false;
    }
}

export default Queue;