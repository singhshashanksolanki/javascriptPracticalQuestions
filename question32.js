// Find the average of the numbers in the numbered array

function average(arr) {
    let result  = arr.reduce((sum, item) => sum + item)/arr.length;

    console.log(result);
    
}

average([2,3,4,5,6])