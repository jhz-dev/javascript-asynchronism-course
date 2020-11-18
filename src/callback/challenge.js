let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API = 'https://rickandmortyapi.com/api/character';

const fetchData = (url, callback) => {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);

    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) { // if the request is completed
            if (xhttp.status === 200) { // if teh request was successful
                callback(null, JSON.parse(xhttp.responseText)) //parse the test response to json
            } else {
                const error = new Error('Error ' + url);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
};

fetchData(API, (errorOne, dataOne) => {
    if (errorOne) {
        return console.error(errorOne);
    }
    fetchData(dataOne.results[0].url, (errorTwo, dataTwo) => {
        if (errorTwo) {
            return console.error(errorOne);
        }
        fetchData(dataTwo.origin.url, (errorThree, dataThree) => {
            if (errorThree) {
                return console.error(errorThree);
            }
            console.log('dataOne:', dataOne.info.count);
            console.log('dataTwo:', dataTwo.name);
            console.log('dataThree:', dataThree.dimension);
        });
    });
})