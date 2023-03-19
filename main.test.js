const frequencyOfWords = require("./main");

describe("frequencyOfWords", () => {
    test("returns an array of size n", () => {
        const result = frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar", 3);
        expect(result).toHaveLength(3);
    });

    test("sorts by decreasing frequency and alphabetical order in case of tie", () => {
        const result = frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar aie aie aie", 3);
        expect(result).toEqual([
            ["aie", 3],
            ["zblah", 3],
            ["bar", 2]
        ]);
    });

    test("return all words if n is greater than number of words", () => {
        const result = frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar", 10);
        expect(result).toEqual([
            ["zblah", 3],
            ["bar", 2],
            ["baz", 2],
            ["foo", 2],
            ["toto", 1]
        ]);
    });

    test("returns an empty array if n equals 0", () => {
        const result = frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar", 0);
        expect(result).toEqual([]);
    })

    test("throws an error for invalid input", () => {
        expect(() => {
            frequencyOfWords("", 3);
        }).toThrow("Sentence must be a non-empty string");

        expect(() => {
            frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar", "3");
        }).toThrow("Number must be a positive number");

        expect(() => {
            frequencyOfWords("baz bar foo foo zblah zblah zblah baz toto bar", -1);
        }).toThrow("Number must be a positive number");

        expect(() => {
            frequencyOfWords(3, 1);
        }).toThrow("Sentence must be a non-empty string");
    });
});
