// Find the count of duplicates in an array

function countDuplicate(arr) {
    let result = arr.reduce((obj, key) => {
        if(obj[key] == undefined) {
            obj[key] = 1;
            return obj;
        } else {
            obj[key]++;
            return obj;
        }
        
    }, {});


    console.log(result);


}

countDuplicate([
    "Jan",
    "Feb",
    "Feb",
    "April",
    "June",
    "Jan",
    "July"
])