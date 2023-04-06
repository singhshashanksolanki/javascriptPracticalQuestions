// Add method using javascript currying concept

function add(x) {
    let sum = x;

    function firstFunction(y) {
        sum += y;
        return secondFunction;
    }

    function secondFunction(z) {
        sum += z;
        return secondFunction;
    }

    secondFunction.valueOf = function() {
        return sum;
    }

    return firstFunction;
}

console.log(add(2)(2)(3).valueOf());