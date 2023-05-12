// find minimum value in a numbered array

function minValue(arr) {
    let result = arr.reduce((min, item) => {
        if(item < min) {
            return item;
        }
        return min;
    })

    console.log(result);
}

minValue([3,4,6,6,123,5,3,8])