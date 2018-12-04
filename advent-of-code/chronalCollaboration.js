const chronalCollaboration = str => {
  if (!str) return 0;
  const addOrSubtract = str[0];
  const nextIndex = findNextIndex(str);
  const num = Number(str.slice(1, nextIndex));
  return addOrSubtract === '+'
    ? num + chronalCollaboration(str.slice(nextIndex))
    : chronalCollaboration(str.slice(nextIndex)) - num;
};

const findNextIndex = str => {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === '+' || str[i] === '-') return i;
  }
  return str.length;
};

module.exports = chronalCollaboration;
