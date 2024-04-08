import { prettyPrint } from "./prettyPrint";
import { CreateTree } from "./tree";

const sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sampleTree = CreateTree(sampleArray);

//prettyPrint(sampleTree.getRoot());
sampleTree.insert(2);
sampleTree.insert(15);
sampleTree.insert(88);
sampleTree.insert(214);
console.log("----- insert 2, 1, 214");
prettyPrint(sampleTree.getRoot());
console.log("----- delete 15, 5, 324");
//delete leaf node 
sampleTree.deleteItem(15);
//delete node with single child
sampleTree.deleteItem(5);
//delete node with both child
sampleTree.deleteItem(324);
//delete root note
sampleTree.deleteItem(8);
prettyPrint(sampleTree.getRoot());