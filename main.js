/*

1) Write a function that takes as input (sentence: String, n: Number)
and returns a list of size `n` where each element contains a word and and the frequency of that word in `sentence`
This list should be sorted by decreasing frequency and alphabetical order in case of tie.

Example:
Input: ("baz bar foo foo zblah zblah zblah baz toto bar", 3)
Output:
[
   ("zblah", 3),
   ("bar", 2),
   ("baz", 2),
]

2) Write tests for the function you just wrote

You are free to chose the programming language that you are the most comfortable with.*/


function frequencyOfWords(str, n) {

    // test to see if str and n are in the right type of data
    if (typeof str !== "string" || str.length === 0  ) throw new Error("Sentence must be a non-empty string");
    if (typeof n !== "number" || n < 0) throw new Error("Number must be a positive number");

    // trim the string and split string into an array
    let words = str.trim().split(" "),
        map = {};
    // create a map to count frequency of each word
    for (let i = 0; i < words.length; i++) {
        map[words[i]] = (map[words[i]] || 0) + 1;
    }
    // sort the words by frequency of each word
    let sorted = Object.keys(map).sort((a, b) => {
        if (map[b] - map[a] === 0) return a.localeCompare(b);
        return map[b] - map[a];
    });
    // sliced the array in n
    const slicedArr = sorted.slice(0, n);
    return slicedArr.map((word) => [word, map[word]]);
}

/* Here is a test to see if the function works

try {
    console.log(frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar", 0));
}
catch (error) {
    console.error(error);
}
*/

module.exports = frequencyOfWords;