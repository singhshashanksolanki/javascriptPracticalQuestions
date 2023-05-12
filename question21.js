// Combine two arrays into a thrid array using spread operator

function combineArrays(arr1, arr2) {
    let result = [...arr1, ...arr2];

    console.log(result);
}

combineArrays([1,3,4,3], [12,4,125,6]);