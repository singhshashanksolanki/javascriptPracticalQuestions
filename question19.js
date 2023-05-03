// Replace an element at a specific index in an Array

function replaceEle(arr, ele, index) {
    let result = [...arr.slice(0, index), ele, ...arr.slice(index+1)];

    console.log(result);
}

replaceEle([1,2,3,45,56,6], 92, 4);