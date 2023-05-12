// Add an element at the beginning of Array

function addElement(arr, ele) {
    // Adding element using spread operator
    // arr = [ele, ...arr];
    // console.log(arr);

    // Adding element using unshift method
    arr.unshift(ele); // unshift method changes the original array instead of returning any value
    console.log(arr)
}

addElement([1,2,3,4,5,6], 8);