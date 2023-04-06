// Return a character from a string at a specific index

function returnCharacter(string, index) {
    // Without using charAt method
    // return string[index-1];
    // With using charAt method
    return string.charAt(index-1);
}

console.log(returnCharacter("hello my name is shashank", 10));