// Find unique values from an array in sorted order

// function findUniq(arr) {
//     let tempArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(!tempArr.includes(arr[i])) {
//             tempArr.push(arr[i]);
//         }
//     }
//     console.log(tempArr);
// }

// Using array filter method

function findUniq(arr) {
    let result = arr.filter((ele, index) => arr.indexOf(ele) == index);
    result = result.sort((a, b) => a-b);
    
    console.log(result);

}


findUniq([3,12,4,5,3,4,5,3,4,6,6,7,8,8,34,43,6,3,4])