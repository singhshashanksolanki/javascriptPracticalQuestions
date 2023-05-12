// Clone an object

function cloneObject() {
    const object = {
        name: "Shashank",
        message: "Hello"
    }
    // using Object.assign() method
    // const newObject = Object.assign({}, object);
    // console.log(newObject);

    //using spread operator
    const newObject = {
        ...object
    }
    console.log(newObject)

}

cloneObject();