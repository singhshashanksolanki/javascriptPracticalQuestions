// Delete a specific element in an Array

function deleteElement(arr, ele) {
    let result = arr.filter((item) => item !== ele);

    console.log(result);
}

deleteElement([3,4,2,5,5], 5);