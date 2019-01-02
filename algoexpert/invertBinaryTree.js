function invertBinaryTree(tree) {
    if (!tree) return tree
	const {left, right} = tree
	tree.left = right
	tree.right = left
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
}

