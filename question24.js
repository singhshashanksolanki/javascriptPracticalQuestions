// Reverse each word and given array

function reverseEverything(array) {
    let tempArray = []
    for(let i = array.length-1; i >= 0; i--) {
        let temp = "";
        for(let j = array[i].length-1; j >= 0; j--) {
            temp += array[i][j]
        }
        tempArray.push(temp);
    }
    
    console.log(tempArray)
}





reverseEverything(["hello", "why", "greater"])