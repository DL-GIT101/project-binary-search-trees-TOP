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
            const getLeafNode = (value, node) => {
                if(node == null){
                    return CreateNode(value);
                } else if (value > node.getValue()){
                    node.setRight(getLeafNode(value, node.getRight()));
                    return node;
                }else {
                    node.setLeft(getLeafNode(value, node.getLeft()));
                    return node;
                }
            }
            _root = getLeafNode(value, _root);
        },
        deleteItem: (value) => {
            let next = null;
            const remove = (value, node) => {
                if(value === node.getValue()){
                    if(node.getLeft() == null && node.getRight() == null){
                        return null;
                    }else if(node.getLeft() !== null && node.getRight() !== null){
                        node.setRight(getNext(node.getRight()));
                        node.setValue(next);
                        return node;
                    }else if(node.getLeft() !== null){
                        node = node.getLeft();
                        return node;
                    }else if(node.getRight() !== null){ 
                        node = node.getRight();
                        return node;
                    }
                }else if(value > node.getValue()){
                    node.setRight(remove(value, node.getRight()));
                    return node;
                }else {
                    node.setLeft(remove(value, node.getLeft()));
                    return node;
                }
            }

            const getNext = (node) => {
                if(node.getLeft() == null && node.getRight() == null){
                    next = node.getValue();
                    return null;
                }else if(node.getLeft() == null){
                    next = node.getValue();
                    node = node.getRight();
                    return node;
                }else if(node.getLeft() !== null){
                    node.setLeft(getNext(node.getLeft()));
                    return node;
                }
            }
            remove(value, _root);
        },
        find: (value) => {
            const findNode = (value, node) => {
                if(value === node.getValue()){
                    return node;
                }else if(node.getLeft() == null && node.getRight() == null){
                    return null;
                }else if(value > node.getValue()) {
                    return findNode(value, node.getRight());
                }else {
                    return findNode(value, node.getLeft());
                }
            }
            return findNode(value, _root);
        },
        levelOrder: (callback = null) => {
            let queue = [_root];
            let result = [];
            const traverse = (node) => {
                if(node.getLeft() !== null){
                    queue.push(node.getLeft());
                }
                if(node.getRight() !== null){
                    queue.push(node.getRight());
                }
                queue.shift();
            }
            if(callback == null){
                while(queue[0]){
                    result.push(queue[0].getValue());
                    traverse(queue[0]);
                }
            }else {
                while(queue[0]){
                    result.push(callback(queue[0]));
                    traverse(queue[0]);
                }
            }
            return result;
        }
    };
}

export { CreateTree };