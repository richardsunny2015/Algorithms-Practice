const isUnique = (str) => {
    const hashTable = {};
    for (let i = 0; i < str.length; i++) {
        if (hashTable.hasOwnProperty(str[i])) hashTable[str[i]]++;
        else hashTable[str[i]] = 1;
    }
    return Object.keys(hashTable).length === str.length;
};


module.exports = {
    isUnique
}
