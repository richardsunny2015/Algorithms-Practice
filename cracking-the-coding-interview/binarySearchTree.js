class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

const inOrderTraverse = (tree, array) => {
    let leftArr = tree.left ? inOrderTraverse(tree.left, array) : [];
    let rightArr = tree.right ? inOrderTraverse(tree.right, array) : [];
    return array.concat(leftArr, tree.value, rightArr);
};

module.exports = {BinarySearchTree, inOrderTraverse};
