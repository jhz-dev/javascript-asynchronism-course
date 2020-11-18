// Callbacks


/**
 * 
 * sample one 
 */

const sum = (numberOne, numberTwo) => numberOne + numberTwo;
const calc = (numberOne, numberTwo, callback) => {
    return callback(numberOne,numberTwo);
}
console.log(calc(1, 2, sum));

/**
 * sample two
 */

 const date = (callback) => {
    console.log(new Date);

    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
 }

const printDate = (dateNow) => {
    console.log(dateNow);
}

date(printDate);