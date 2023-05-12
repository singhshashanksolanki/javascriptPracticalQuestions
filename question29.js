// Check if an array contains any element of another array

function checkEle(arr1, arr2) {
    let result = arr1.some(item => arr2.includes(item));
    console.log(result);
}

checkEle([12,33,12,34,23], [2,3,4,5,6])