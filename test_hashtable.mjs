import { HashTable } from "./HashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1, "test1");
hashTable.set(4, "test2");
hashTable.set(20, "test3");
hashTable.set(6, "test4");
hashTable.set(22, "test5");
hashTable.set(21, "test6");
hashTable.set(10, "test7");
hashTable.set(14, "test8");
hashTable.set(9, "test9");

console.log(`1: ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1: ${hashTable.get(1)}`);
console.log(`21: ${hashTable.get(21)}`);