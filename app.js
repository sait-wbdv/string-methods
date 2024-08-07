/* 19 String Methods */
/* Source: Free Code Camp
https://youtu.be/VRz0nbax0uI */

const stringOne = "freeCodeCamp is the best place to learn";
const stringTwo = "frontend and backend development";

// 1. Get the 5th character in stringOne
console.log("charAt -> ", stringOne.charAt(5));

// 2. Get the asci character code of the character at index 4 of the first string
console.log("chatCodeAt -> ", stringOne.charCodeAt(4));

// 3. Connect the two strings together
console.log("concat -> ", stringOne.concat(stringTwo));

// 4. Find if either string ends with the word "learn"
console.log(
  "endsWith -> ",
  stringOne.endsWith("learn"),
  stringTwo.endsWith("learn")
);

// 5. Get the character that correspondes to the ascii code 114
console.log("fromCharCode -> ", String.fromCharCode(114));

// 6. Check if the second string has  "end" in it
console.log("includes -> ", stringTwo.includes("end"));

// 7. Find the first index of "end" in string two
console.log("indexOf -> ", stringTwo.indexOf("end"));

// 8. Find the last index of "end" in string two
console.log("lastIndexOf -> ", stringTwo.lastIndexOf("end"));

// 9. Pass a regular expression /end/g to get the matches of end from string 2
console.log("match -> ", stringTwo.match(/end/g));

// 10. Print the first sentence with a single command 3 times
console.log("repeat -> ", stringOne.repeat(3));

// 11. Replace the word learn with grow in string 1
console.log("replace -> ", stringOne.replace(/learn/g, "grow"));

// 12. Search for the word best in string 1
console.log("search -> ", stringOne.search("best"));

// 13. Slice the second string at characters 2 and 4
console.log("slice -> ", stringTwo.slice(2, 4));

// 14. Split the first sentence up into an array of words.
console.log("split -> ", stringOne.split(" "));

// 15. check if the first string starts with "free"
console.log("startsWith -> ", stringOne.startsWith("free"));

// 16. Get a substring from string 1 at indices 2 and 6
console.log("substring -> ", stringTwo.substring(2, 6));

// 17. Make the first string all lower case
console.log("toLowerCase -> ", stringOne.toLowerCase());

// 18. Make the second string all upper case
console.log("toUpperCase -> ", stringTwo.toUpperCase());

// 19. Remove all the spaces from the start and end of string three
const stringThree = "     Subscribe now!      ";

console.log("trim -> ", stringThree.trim());
