// Insert an element at a specific index in an Array

function insertEle(arr, ele, index) {
    arr = [...arr.slice(0, index), ele, ...arr.slice(index+1) ];

    console.log(arr);
}

insertEle([1,2,3,4,5,6,67,6], 12, 3);