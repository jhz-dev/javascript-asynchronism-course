const doSomethingSync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('doSomethingSync resolve'), 3000)
            : reject(new Error('doSomethingSync resolve'))
    });
}

const doSomething = async () => {
    const awaiting = await doSomethingSync();
    console.log(awaiting);
}

doSomething();

const anotherFunction = async () => {
    try {
        const awaiting = await doSomethingSync();
        console.log(awaiting);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction();