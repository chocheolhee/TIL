import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Deque {
    constructor() {
        this.list = new DoubleLinkedList();
    }

    printAll() {
        this.list.printAll();
    }

    addFist(data) {
        this.list.insertAt(0, data);
    }

    removeFirst() {
        return this.list.deleteAt(0);
    }

    addLast(data) {
        this.list.insertAt(this.list.count, data);
    }

    removeLast() {
        return this.list.deleteLast();
    }

    isEmpty() {
        return (this.list.count == 0);
    }
}

export { Deque }