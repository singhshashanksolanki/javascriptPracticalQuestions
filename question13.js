// Remove an element at the end of array

function removeElement(arr) {
    let result = arr.slice(0,-1);
    console.log(result);
}

removeElement([1,2,4,5,5,6]);