let characters = [];

let word = "rotator"

let rword = "";

//put the characterss(letters) of the word into stack
for(var i = 0; i < word.length; i++){
    characters.push(word[i]);
}
//pop off the letters in a reverse order

for(var i = 0; i < word.length; i++){
    rword += characters.pop();
}

if(rword === word){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}
