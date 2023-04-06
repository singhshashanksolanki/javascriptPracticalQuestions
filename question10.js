// Combine two objects

function combineObjects() {

    const msg1 = {
        message1: "hello"
    }
    
    const msg2 = {
        message2: "hi"
    }
    
    const messages = {
        ...msg1,
        ...msg2
    }

    console.log(messages)
}


combineObjects();