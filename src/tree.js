import { CreateNode } from "./node";

const CreateTree = (array) => {

    let _root = null;

    array.sort((a, b) => a - b);
    const cleanArray = array.filter((curr, index, arr) => {
        return arr.indexOf(curr) === index;
    });

    function buildTree(array, start, end) {

        if(start > end) {
            return null;
        }

        let mid = parseInt((start + end) / 2);
        let node = CreateNode(array[mid]);

        node.setLeft(buildTree(array, start, mid - 1));
        node.setRight(buildTree(array, mid + 1, end));

        return node;
    }

    _root = buildTree(cleanArray, 0, cleanArray.length - 1)

    return {
        getRoot: () => _root,
        insert: (value) => {
            const getLeaf = (value, node) => {
                if(node == null){
                    return CreateNode(value);
                } else if (value > node.getValue()){
                    node.setRight(getLeaf(value, node.getRight()));
                    return node;
                }else {
                    node.setLeft(getLeaf(value, node.getLeft()));
                    return node;
                }
            }
            getLeaf(value, _root);
        }
    };
}

export { CreateTree };