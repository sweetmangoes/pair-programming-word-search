// Edge cases: 
// (1) What if the words are vertical 
// (2) What if the word matrix is empty. 

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const transpose = letters[0].map((column, element) => letters.map(row => row[element]));
    const verticalJoin = transpose.map(ls => ls.join(''));
    if (word.length === 0 || letters.length === 0) {
        return false;
    } 
    for (wrd of horizontalJoin) {
        if (wrd === word) {
            return true;
        } 
        for (wrd of verticalJoin) {
        if (wrd === word) {
            return true; 
        } 
    } 
    }
    return false; 
} 

module.exports = wordSearch