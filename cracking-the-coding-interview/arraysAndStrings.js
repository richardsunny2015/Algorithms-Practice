const isUnique = (str) => {
    const hashTable = {};
    for (let i = 0; i < str.length; i++) {
        if (hashTable.hasOwnProperty(str[i])) hashTable[str[i]]++;
        else hashTable[str[i]] = 1;
    }
    return Object.keys(hashTable).length === str.length;
};

const checkPerm = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const hashTable1 = {};
    const hashTable2 = {};
    for (let i = 0; i < str1.length; i++) {
        if (hashTable1.hasOwnProperty(str1[i])) hashTable1[str1[i]]++;
        else hashTable1[str1[i]] = 1;
        if (hashTable2.hasOwnProperty(str2[i])) hashTable2[str2[i]]++;
        else hashTable2[str2[i]] = 1;
    }
    const hashTable1Keys = Object.keys(hashTable1);
    const hashTable2Keys = Object.keys(hashTable2);
    if (hashTable1Keys.length !== hashTable2Keys.length) return false;
    for (let j = 0; j < hashTable1Keys.length; j++) {
        if (hashTable1[hashTable1Keys[j]] !== hashTable2[hashTable1Keys[j]]) return false;
    }
    return true;
}


module.exports = {
    isUnique,
    checkPerm
}
