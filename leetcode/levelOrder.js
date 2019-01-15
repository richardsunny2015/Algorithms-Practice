// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function(root) {
    if (!root) return [] // if there is no root, we want to return an empty array
    let queue = [[root]] // place the root in an array and place that array in a queue
    let returnArray = [] // initialize array that we will eventually return
    while (queue.length) {
        const currlevel = queue.shift() // shift off first element
        let retArrPush = [] // we will eventually push this array into returnArray
        let queuePush = [] // eventually push into queue
        for (let i = 0; i < currlevel.length; i++) { // loop through shifted element
            retArrPush.push(currlevel[i].val) // push value into retArrPush
            if (currlevel[i].left) queuePush.push(currlevel[i].left) // if left is not null, push left child
            if (currlevel[i].right) queuePush.push(currlevel[i].right) // if right is not null, push right child
        }
        if (retArrPush.length) returnArray.push(retArrPush) // if retArrPush has length, push it into our returnArray
        if (queuePush.length) queue.push(queuePush) // if queuePush has length, push it into our queue
    }
    return returnArray
};
