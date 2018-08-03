const isUnique = str => {
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
};

const urlify = str => {
  // return str.split(' ').join('%20'); easy solution
  let retStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') retStr += '%20';
    else retStr += str[i];
  }
  return retStr;
};

const paliPerm = str => {
  const hashTable = {};
  for (let i = 0; i < str.length; i++) {
    if (hashTable.hasOwnProperty(str[i])) hashTable[str[i]]++;
    else hashTable[str[i]] = 1;
  }
  return (
    Object.keys(hashTable).filter(key => hashTable[key] % 2 !== 0).length < 2
  );
};

const oneAway = (str, fixedStr) => {
  let longest = str.length > fixedStr.length ? str : fixedStr;
  let shortest = str.length <= fixedStr.length ? str : fixedStr;
  for (let i = 0; i < longest.length; i++) {
    if (longest[i] !== shortest[i]) {
      if (longest.length - 1 === shortest.length) {
        shortest = shortest.slice(0, i) + longest[i] + shortest.slice(i);
      } else if (longest.length === shortest.length) {
        shortest = shortest.slice(0, i) + longest[i] + shortest.slice(i + 1);
      }
      return shortest === longest;
    }
  }
  return false;
};

const strCompress = str => {
  let retStr = '';
  let letterCount = 0;
  let currenctCharacter = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === currenctCharacter) {
      letterCount++;
    } else {
      retStr +=
        letterCount > 1 ? currenctCharacter + letterCount : currenctCharacter;
      letterCount = 1;
      currenctCharacter = str[i];
    }
    if (i + 1 === str.length) {
      retStr +=
        letterCount > 1 ? currenctCharacter + letterCount : currenctCharacter;
    }
  }
  return retStr;
};

const rotateMatrix = (img) => {
  return img;
}

module.exports = {
  isUnique,
  checkPerm,
  urlify,
  paliPerm,
  oneAway,
  strCompress,
  rotateMatrix
};
