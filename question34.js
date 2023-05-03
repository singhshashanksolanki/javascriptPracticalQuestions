// Find maximum value in a numbered array

function maxValue(arr) {
    let result = arr.reduce((max, item) => {
        if(item > max) {
            return item;
        }
        return max;
    })

    console.log(result);
}

maxValue([3,4,6,6,123,5,3,8])