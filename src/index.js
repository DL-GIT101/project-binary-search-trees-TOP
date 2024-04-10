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
found.push(sampleTree.find(9));
found.push(sampleTree.find(67));
found.push(sampleTree.find(1));
found.push(sampleTree.find(88));
found.push(sampleTree.find(2));
found.push(sampleTree.find(999));
found.forEach(node => {
    if(node !== null){
        console.log(node.getValue());
    }else{
        console.log(node);
    }
});
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