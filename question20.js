// Sort and reverse an array without changing the original array

// Without using inbuild function

function sortnReverse(arr) {
    // Sorting array using Insertion sort
    let copyArr = [...arr];
    for(let i = 1; i < copyArr.length; i++) {
        let current = copyArr[i];
        let j = i - 1;
        while( j >= 0 && current < copyArr[j]) {
            copyArr[j+1] = copyArr[j];
            j--;
        }
        copyArr[j+1] = current;
    }
    // Reversing sorted array
    for(let i = 0; i < Math.trunc(arr.length/2); i++) {
        let j = arr.length - i - 1;
        // Swapping last and first
        let temp = copyArr[i];
        copyArr[i] = copyArr[j];
        copyArr[j] = temp
    }
    console.log(copyArr)
}

// Using inbuild function

function sortnReverse2(arr) {
    
    let result = arr.slice().sort().reverse();

    console.log(result);
    
}


sortnReverse([3,5,1,63,3,45]);
sortnReverse2([3,5,1,63,3,45])