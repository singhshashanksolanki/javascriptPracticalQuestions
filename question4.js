// Replace a given string in a given array

function replaceString(arr) {
    let result = arr.map(x => {
        return x.replace(/ban/g, "");
    })
    console.log(result);
}

replaceString(["bangalore, bangladesh, bangkok, banaras"]);