class Queue {
    constructor(queueSize) {
        this.mySize = queueSize;
        this.myQueue = new Array();

    }


    enqueue(data) {
    //   if (this.isFull()) {
    //     return 0;
    //   }
    // console.log("enqueueing data:", data)

      this.myQueue.push(data);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 0;
        }

        this.myQueue.shift();

    }

    peek() {
        return this.myQueue[0];
        
    }


    /**
     * Check if element already exists in queue.
     * @param {} data 
     * @returns {boolean} "Returns true if element does exist in queue."
     */
    hasElement(data) {
        return this.myQueue.includes(data);
    }

    isFull() {
        if (this.myQueue.length >= this.mySize) {
            return 1;
        } else {
            return 0;
        }

    }

    isEmpty() {
        if (this.myQueue.length <= 0) {
            return 1;
        } else {
            return 0;
        }

    }
  }




exports.Queue = Queue;