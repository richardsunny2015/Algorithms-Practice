function searchBST(node, value) {
    if (!node) return null
    if (node.value === value) return node
    return node.value < value ? searchBST(node.right, value) : searchBST(node.left, value)
}

module.exports = searchBST
