const ccPartTwo = (values, lookUpTable = new Set([0]), sum = 0) => {
    for (let i = 0; i < values.length; i++) {
        sum += values[i]
        if (lookUpTable.has(sum)) return sum
        lookUpTable.add(sum)
    }
    return ccPartTwo(values, lookUpTable, sum)
}

module.exports = ccPartTwo
