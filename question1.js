// Printing The fibonacci Series
function fibonacciSeries() {
    // Printing 10 number of fibonacci series
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
    for(let i = 0; i < 10; i++) {
        let next = a + b
        console.log(next);
        a = b;
        b = next;
    }
}

fibonacciSeries();