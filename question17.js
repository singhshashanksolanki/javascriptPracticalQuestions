// Delete an element specific at a specific index in an Array

function deleteEle(arr, index) {
    let result = [...arr.slice(0, index), ...arr.slice(index+1)];

    console.log(result);
}

deleteEle([1,4,5,2,6,7], 2);