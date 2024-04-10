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
            let queue = [];
            let result = [];
            const traverse = (node) => {
                if(node === null){ return };
                queue.push(node);

                while(queue.length !== 0){
                    let current = queue[0];
                    process(current);
                    if(current.getLeft() !== null){ queue.push(current.getLeft())}
                    if(current.getRight() !== null){ queue.push(current.getRight())}
                    queue.shift();
                }
            }
            const process = (node) => {
                if(callback == null){
                    result.push(node.getValue());
                }else{
                    result.push(callback(node));
                }
            }
            traverse(_root);
            return result;
        },
        inOrder: (callback = null) => {
            let result = [];
            const traverse = (node) => {

                if(node === null){ return }

                traverse(node.getLeft());
                process(node);
                traverse(node.getRight());
            }

            const process = (node) => {
                if(callback == null){
                    result.push(node.getValue());
                }else{
                    result.push(callback(node));
                }
            }
            traverse(_root);
            return result;
        },
        preOrder: (callback = null) => {
            let result = [];
            const traverse = (node) => {

                if(node === null){ return }

                process(node);
                traverse(node.getLeft());
                traverse(node.getRight());
            }

            const process = (node) => {
                if(callback == null){
                    result.push(node.getValue());
                }else{
                    result.push(callback(node));
                }
            }
            traverse(_root);
            return result;
        },
        postOrder: (callback = null) => {
            let result = [];
            const traverse = (node) => {

                if(node === null){ return }

                traverse(node.getLeft());
                traverse(node.getRight());
                process(node);
            }

            const process = (node) => {
                if(callback == null){
                    result.push(node.getValue());
                }else{
                    result.push(callback(node));
                }
            }
            traverse(_root);
            return result;
        },
        height: (node) => {
            let height = 1;
            const traverse = (node) => {
                
                if(node === null){ return 0}

                let leftHeight = traverse(node.getLeft());
                let rightHeight = traverse(node.getRight());

                if(leftHeight > rightHeight){
                    height = leftHeight;
                }else {
                    height = rightHeight;
                }

                return height + 1;
            }

            return traverse(node);
        },
    }
}

export { CreateTree };