// Check if the number is armstrong or not

function armstrongNumber(num) {
    let temp = num;
    let temp2 = num;
    let digits = 0;
    let result = 0;
    // Calculating the number of digits in a number
    while(temp2 > 0) {
        digits++;
        temp2 = Math.trunc(temp2/10);
    }
    while(temp > 0) {
        let rem = temp % 10; 
        temp = Math.trunc(temp/10);
        console.log(temp)
        result += rem**digits;
    }
    if(result === num) {
        console.log("Armstrong Number");
    } else {
        console.log("Not Armstrong Number")
    }
}

armstrongNumber(1634);
armstrongNumber(153);