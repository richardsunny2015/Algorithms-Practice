function invertBinaryTree(tree) {
    if (!tree) return // if tree is null, return
	const {left, right} = tree // grab left and right properties of tree
	tree.left = right // swap
	tree.right = left
	invertBinaryTree(tree.left) // call recursively on left and right branches
	invertBinaryTree(tree.right)
}

// not a real big fan of this function because it mutates the tree that is passed in
