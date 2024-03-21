function isPalindrome(word) {
    // Split the word into an array of characters
    let characters = word.split('');

    // Reverse the array of characters
    let reversed = [];
    for (let i = characters.length - 1; i >= 0; i--) {
        reversed.push(characters[i]);
    }
    // Join the reversed characters to form a new word
    let reversedWord = reversed.join('');

    // Check if the reversed word is equal to the original word
    return reversedWord === word;
}
// Test the function
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("tech")); // Output: false



//FUNCTION 2
const check = (word) => {
  word = "rotator";

  let characters = word.split("");

//Reverse the characters to form a new word
  let reversed = characters.slice().reverse();
  let reversedWord = reversed.join("");

// Check if the reversed word is equal to the original word
  return reversedWord == word;
};

//Test the function
console.log(check()); //Output: true
