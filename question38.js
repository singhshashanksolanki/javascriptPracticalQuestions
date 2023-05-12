// *Note:- Numerous Ways to access properties of objects: https://dmitripavlutin.com/access-object-properties-javascript/

// Find the prime numbers in an Array

// Using array.push(); // we need to use it seperately and then return array because push returns the size of the array

function findPrime(num) {
    let result = num.reduce((arr, item) => {
        
        let i= 2, flag = true;
        while(i < item) {
            if( item % i === 0)  {
                flag = false;
            }
            i++;
        }
        if(flag === true) {
            arr.push(item);
            return arr;
        } else {
            return arr;
        }
    }, []);

    console.log(result);
}

// Using array.concat() method; we can return it directly

function findPrime(num) {
    let result = num.reduce((arr, item) => {
        
        let i= 2, flag = true;
        while(i < item) {
            if( item % i === 0)  {
                flag = false;
            }
            i++;
        }
        if(flag === true) {

            return arr.concat(item);
        } else {
            return arr;
        }
    }, []);

    console.log(result);
}

// Returning object using reduce function

function findPrime(num) {
    let result = num.reduce((obj, item) => {
        
        let i= 2, flag = true;
        while(i < item) {
            if( item % i === 0)  {
                flag = false;
            }
            i++;
        }
        if(flag === true) {
            obj[item] = flag;
            return obj
        } else {
            obj[item] = flag;
            return obj
        }
    }, {});

    console.log(result);
}


findPrime([12,23,45,6,7,13,23]);