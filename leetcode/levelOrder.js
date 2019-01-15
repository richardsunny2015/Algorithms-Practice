var levelOrder = function(root) {
    if (!root) return []
    let queue = [[root]]
    let returnArray = []
    while (queue.length) {
        const currlevel = queue.shift()
        let retArrPush = []
        let queuePush = []
        for (let i = 0; i < currlevel.length; i++) {
            retArrPush.push(currlevel[i].val)
            if (currlevel[i].left) queuePush.push(currlevel[i].left)
            if (currlevel[i].right) queuePush.push(currlevel[i].right)
        }
        if (retArrPush.length) returnArray.push(retArrPush)
        if (queuePush.length) queue.push(queuePush)
    }
    return returnArray
};
