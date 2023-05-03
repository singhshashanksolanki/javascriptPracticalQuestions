// Find duplicate elements in a given array

function findDuplicate(arr) {
    let result = arr.filter((ele, index) => arr.indexOf(ele) !== index);

    console.log(result)
}

findDuplicate([14, 23, 6, 6, 14, 56, 87, 14]);