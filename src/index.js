import { prettyPrint } from "./prettyPrint";
import { CreateTree } from "./tree";

const sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sampleTree = CreateTree(sampleArray);

prettyPrint(sampleTree.getRoot());
sampleTree.insert(2);
sampleTree.insert(15);
sampleTree.insert(214);
prettyPrint(sampleTree.getRoot());