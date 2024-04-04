const CreateTree = (array) => {

    let _root = null;

    function buildTree(array) {

        array.sort((a, b) => a - b);
        const cleanArray = array.filter((curr, index, arr) => {
            return arr.indexOf(curr) === index;
        });
        
       // return rootNode;
    }

    buildTree(array);

}

export { CreateTree };