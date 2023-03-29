// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe("secretMessage", () => {
const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"
//     it("returns a string with a coded message", () => {
//       expect(secretMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//       expect(secretMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       expect(secretMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
//   })
// ---> secretMessage is undefined

// Pseudocode: with the input of a string as the given word create a method called secretMessage and create a variable replacedCharacters that selects the given string values and says what to convert those values into, so 'a':(convert) to '4', and so on. then return using the built in method replace, and regular expression(buckle up for this one...) regular expression defined by start and end point of /values to look for/ gi, (g being the global search that should search for all matches in the given string) and i specifies case insensitive matching, should match the values regardless of casing(NOTE: THIS DOES NOT CHANGE IT FROM UPPERCASE TO LOWER CASE... I spent way too much time trying to figure out why this was not working, its because im using matched, so it has to match exact.. I could add all of the uppercase vowels to the object, but that looks cluttered and ugly to me.) then you are saying take those 'matched' values, implicit return with => the values to change variable that I created, then built in method toLowerCase to account for capital letter starting strings.

secretMessage = (string) => {
    replacedCharacters = {'a': '4', 'e': '3', 'i': '1', 'o': '0'}
    return string.replace(/[aeio]/gi, matched => replacedCharacters[matched.toLowerCase()]) 
}

// console.log(secretMessage(secretCodeWord1))

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("wordsContainingTheSameLetter", () => {
const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
    it("returns an array of all the words containing that particular letter", () => {
        expect(wordsContainingTheSameLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordsContainingTheSameLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// --> wordsContainingTheSameLetter is not defined
// b) Create the function that makes the test pass.


// Pseudocode: I wanted to know more about regex, so I thought it would be fun to try it again here,  and now I am just tired, sad and angry at how long this took...  create a function called wordsContainingTheSameLetter, with the array of strings as the given input, use 2!!!!! not 1, 2! parameters here(meaning you also need 2!! parameters in your test function... guess how long it took me to figure out THAT is why my test was failing after my console log was passing flawlessly...) I chose the given array of string to be specific, and letter since thats the other give test variable. then create a variable I named regexPattern since thats what this line is doing, the built in method RexExp is one of two ways to create regular expression in Javascript, one is by using the (/pattern to search for/) method like in the example assessment question above, or using what I did here RegExp constructor which basically builds your own regex pattern finder based on your inputs, in this case (letter, and 'i' which specifies that the match should match uppercase and lowercase letters.) then create a returnedArray variable to return at the end after it takes in the given array fruitArray, and uses the built in method .filter to filter it searches for the regex pattern created above and finds the letter given to look for, then .test runs a true or false if it finds or does not find that letter in the (string) for each element in the array. and if it passes it returns it in the returnedArray. If it fails it just disregards it entirely.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

wordsContainingTheSameLetter = (fruitArray, letter) => {
    let regexPattern = new RegExp(letter, "i")
    return returnedArray = fruitArray.filter(string => regexPattern.test(string))
}

// console.log(wordsContainingTheSameLetter(fruitArray, letterA));
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// describe("fullHouseOrNot", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
// it("determines whether or not the array is a "full house", () => {
//     expect(fullHouseOrNot(hand1)).toEqual(true)
//     expect(fullHouseOrNot(hand2)).toEqual(false)
//     expect(fullHouseOrNot(hand3)).toEqual(false)
//     expect(fullHouseOrNot(hand4)).toEqual(true)
//   })
// })
// ---> fullHouseOrNot is undefined


// pseudocode: the given input is an array of numbers, create a function called fullHouseOrNot that takes the array as a parameter, using the built in method .sort, sort the arrays in numerical order so that in the if statement after, you can compare each index number to the next and see if they match, so if index 0 is the same as index 1 and index 2, and index 3 is the same as index 4, its a full house and returns true, if this proves false then return false

fullHouseOrNot = (array) => {
    array.sort()
    if ((array[0] === array[1] && array[1] === array[2] && array[3] === array[4]) ||
        (array[0] === array[1] && array[2] === array[3] && array[3] === array[4])) {
        return true
    }
    return false
}
