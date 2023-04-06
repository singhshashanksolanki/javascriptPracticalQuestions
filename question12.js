// Replace an existing element in an object

function modifyObj() {

    const originalObj = {
        name: "Shashank",
        message: "Hi"
    }

    const modifiedObj = {
        ...originalObj,
        message: "Hello"
    }

    console.log(modifiedObj);

}

modifyObj();