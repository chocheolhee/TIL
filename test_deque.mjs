import { Deque } from "./Deque.mjs";

let deque = new Deque();

console.log("===== addFirst =====");
console.log(`isEmpty: ${deque.isEmpty()}`);
deque.addFist(1);
deque.addFist(2);
deque.addFist(3);
deque.addFist(4);
deque.addFist(5);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

console.log("===== removeFirst =====");
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

console.log("===== addLast =====");
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);
deque.addLast(5);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

console.log("===== removeLast =====");
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);