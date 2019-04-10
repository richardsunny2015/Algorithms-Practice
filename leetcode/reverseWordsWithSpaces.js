/* Given an input string, reverse the string word by word.


Example 1:

Input: "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

var reverseWords = function(s) {
    const arr = buildArr(s); // use helper to build arr
    let head = 0, // instantiate head and tail
        tail = arr.length - 1;
    while (head < tail) { // loop til head is equal or greater than tail
        let temp = arr[head]; // save our head in a temporary variable
        arr[head] = arr[tail]; // make tail our new head
        arr[tail] = temp; // make tail our temp
        head++;
        tail--;
    }
    return arr.join(' '); // join the array with spaces
};

function buildArr(s) {
    let arr = [], // instantiate array and i
        i = 0;
    while (i < s.length) {
        if (s[i] !== ' ') { // any time there is no space
            let word = ''; // instantiate a word that we will push into array
            for (let j = i; j < s.length; j++) { // loop til end of word OR
                if (s[j] === ' ') break; // til we reach a space
                else word += s[j]; // add letter to word if there's no space
                i = j // set our i equal to j so that we don't revisit the same character
            }
            arr.push(word);
        }
        i++; // always increment i
    }
    return arr;
}
