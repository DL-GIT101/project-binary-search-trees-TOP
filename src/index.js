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
console.log("----- delete 15, 5, 324, 8");
//delete leaf node 
sampleTree.deleteItem(15);
//delete node with single child
sampleTree.deleteItem(5);
//delete node with both child
sampleTree.deleteItem(324);
//delete root note
sampleTree.deleteItem(8);
prettyPrint(sampleTree.getRoot());
console.log("----- find 9, 67, 1, 88, 2, 999");
const found = [];
const foundResult = [];
found.push(sampleTree.find(9));
found.push(sampleTree.find(67));
found.push(sampleTree.find(1));
found.push(sampleTree.find(88));
found.push(sampleTree.find(2));
found.push(sampleTree.find(999));
found.forEach(node => {
    if(node !== null){
        foundResult.push(node.getValue());
    }else{
        foundResult.push(null);
    }
});
console.log(foundResult);
const displayValue = (node) => {
    let result = '[ ' + node.getValue() + ' ]';
    return result;
}
//levelorder
console.log("----- levelOrder no callback");
console.log(sampleTree.levelOrder());
console.log("----- levelOrder with callback");
console.log(sampleTree.levelOrder(displayValue));
//inorder
console.log("----- inorder without callback");
console.log(sampleTree.inOrder());
console.log("----- inorder with callback");
console.log(sampleTree.inOrder(displayValue));
//preorder
console.log("----- preorder without callback");
console.log(sampleTree.preOrder());
console.log("----- preorder with callback");
console.log(sampleTree.preOrder(displayValue));
//postorder
console.log("----- postorder without callback");
console.log(sampleTree.postOrder());
console.log("----- postorder with callback");
console.log(sampleTree.postOrder(displayValue));
//height
const findThis1 = sampleTree.height(sampleTree.find(2));
console.log("----- height from 2 is " + findThis1);
const findThis2 = sampleTree.height(sampleTree.find(88));
console.log("----- height from 88 is " + findThis2);
const findThis3 = sampleTree.height(sampleTree.find(1));
console.log("----- height from 1 is " + findThis3);
const findThis4 = sampleTree.height(sampleTree.find(67));
console.log("----- height from 67 is " + findThis4);
const findThis5 = sampleTree.height(sampleTree.find(9));
console.log("----- height from 9 is " + findThis5);