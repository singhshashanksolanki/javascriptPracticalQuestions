// Weakset in javascript with Example

function weaksetExample() {
    obj1 = {
        message1: "Hello"
    }

    obj2 = {
        message2: "Hi"
    }

    const newSet = new WeakSet([obj1, obj2]);
    console.log(newSet);
}

weaksetExample();