const CreateNode = (value) => {

    let _value = value;
    let _left = null;
    let _right = null;

    return {
        getValue: () => _value,
        setValue: (value) => _value = value,
        getLeft: () => _left,
        setLeft: (node) => _left = node,
        getRight: () => _right,
        setRight: (node) => _right = node,
    }
}

export {CreateNode};