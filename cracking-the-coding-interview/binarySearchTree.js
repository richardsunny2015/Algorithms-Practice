class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

const inOrderTraverse = (tree) => {
    let leftArr = tree.left ? inOrderTraverse(tree.left) : [];
    let rightArr = tree.right ? inOrderTraverse(tree.right) : [];
    return leftArr.concat(tree.value, rightArr);
};

module.exports = {BinarySearchTree, inOrderTraverse};
