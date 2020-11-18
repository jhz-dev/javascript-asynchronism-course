const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('gotcha');
        } else {
            reject('Whooops!');
        }
    });
};

someThingWillHappen()
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})

const someThingWillHappenTwo = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true');
            }, 2000);
        } else {
            const error = new Error('Whooops!');
            reject(error);
        }
    });
};

someThingWillHappenTwo()
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});

Promise.all([someThingWillHappen(), someThingWillHappenTwo()])
.then(response => console.log(response))
.catch(err => console.error(err));