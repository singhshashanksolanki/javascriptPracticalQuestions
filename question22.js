// Function to check given string is palindrome or not

// Without using inbuilt function

function checkPalindrome(str) {

    let isPal = true;

    for(let i = 0; i < Math.trunc(str.length/2); i++) {
        if(str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) {
            isPal = false;
            break;
        }
    }
    if(isPal) {
        console.log("String is Palindrome");
    } else {
        console.log("String is not palindrome");
    }
}

// With using inbuilt function

function checkPalindrome2(str) {

    str = str.toLowerCase();
    let result = str.split("").reverse().join();
    if(str === result) {
        console.log("String is Palindrome2");
    } else {
        console.log("String is not palindrome2");
    }
}

checkPalindrome("raDaRe");
checkPalindrome2("HHHHHsdalahhhHh");