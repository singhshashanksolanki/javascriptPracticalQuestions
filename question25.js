// Given an array of strings, reverse each word in a String
// eg:- "the sky is blue"
// out:- "blue is the sky"



function reverseString(str) {



    let result = str.split(" ").reverse().join(" ");

    console.log(result)
}

reverseString("the sky is blue");


