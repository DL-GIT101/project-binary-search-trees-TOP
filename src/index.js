import { CreateTree } from "./tree";

const sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sampleTree = CreateTree(sampleArray);

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.getRight() !== null) {
      prettyPrint(node.getRight(), `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getValue()}`);
    if (node.getLeft() !== null) {
      prettyPrint(node.getLeft(), `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

prettyPrint(sampleTree);