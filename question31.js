// Capitalize the first letter in a string

function upperfirstChar(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1);

    console.log(result);
}

upperfirstChar("hello");