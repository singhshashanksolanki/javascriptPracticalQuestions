// Given two strings, how can you check if the strings are anagram for each other



function checkAnagram(str, anaStr) {
    // Coverting strings to lowercase strings
    str = str.toLowerCase();
    anaStr = anaStr.toLowerCase();

    // Splitting the string to perform sorting operation
    str = str.split("");
    anaStr = anaStr.split("");

    // Sorting normal string using insertion sort
    for(let i = 1; i < str.length; i++) {
        let current = str[i];
        j = i -1;
        while(j >= 0 & current < str[j]) {
            str[j+1] = str[j];
            j--;
        }
        str[j+1] = current;
    }

    // Sorting anagram string selection sort
    for(let i = 0; i < anaStr.length - 1; i++) {
        let smallest = i;
        for(let j = i + 1; j < anaStr.length; j++) {
            if(anaStr[i] > anaStr[j]) {
                smallest = j;
            }
        }
        let temp = anaStr[i];
        anaStr[i] = anaStr[smallest];
        anaStr[smallest] = temp;
    }
    
    // Joining strings to compare
    str = str.join("");
    anaStr = anaStr.join("");

    // Comparing both the strings
    if(str === anaStr) {
        console.log("Strings are anagram");
    } else {
        console.log("Strings are not anagram");
    }
    
}

checkAnagram("hello", "ellho");