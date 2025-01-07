

function sumOfNumber(numbers){
    let result = 0;
    for(const number of numbers){
        result = result + number;
    }
    return result;
}


const numberArry = [12, 34, 15, 32, 77, 88, 93];
const sum = sumOfNumber(numberArry);
console.log('Sum of numbers is: ', sum);


// arry average function

function arryAverage (numbers){
    let sum = 0;
    for (const number of numbers){
        sum = sum + number;
    }
    const arryLen = numbers.length;

    const average = sum / arryLen;
    const averageThreeDecemial = average.toFixed(3);
    const srtToNumber = parseFloat(averageThreeDecemial)
    return srtToNumber;

}


const priceArry = [112, 221, 745, 67, 932, 871];
const priceAverage = arryAverage(priceArry);
console.log('Total price average is : ', priceAverage);