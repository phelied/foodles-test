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
    if (str.length === 0) return "Sentence must have at least one words";
    if (typeof n !== "number") return "n must be a number";
    if (n < 1) return "n must be greater than 0";
    if (typeof str !== "string") return "str must be a string";

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

// Test: if same frequency, sort alphabetically
console.log(
    frequencyOfWords("bar bar bar foo foo foo mii mii mii maa maa maa", 3)
);
// Test: same call as test 
console.log(
    frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar", 3)
);
// Test: if n is greater than the number of words
console.log(
    frequencyOfWords("bar bar bar foo foo foo mii mii mii maa maa maa", 20)
);

// Test: if n is less than 1
console.log(
    frequencyOfWords("bar bar bar foo foo foo mii mii mii maa maa maa", 0)
);
// Test: if n is not a number
console.log(
    frequencyOfWords("bar bar bar foo foo foo mii mii mii maa maa maa", "0")
);
// Test: if str is empty
console.log(frequencyOfWords("", 3));

// test if majuscule and minuscule are the same
console.log(
    frequencyOfWords("BaR bar bar foo foo", 3)
);
