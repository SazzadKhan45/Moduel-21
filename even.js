function evenNumbersOnly (numbers){
    let even =[];
    let odd = [];
    for (const number of numbers){
        if (number % 2 === 0){
            even.push(number);
        }
        else{
            odd.push(number);
        }
    }
    console.log('This is even numbers arry : ', even);
    console.log('This is odd numbers arry : ', odd);
    return {even, odd};
    
}

// Call the function

const inputArry = [13, 24, 87, 24, 22, 64, 93, 58]
const callTheFunction = evenNumbersOnly(inputArry);
console.log(callTheFunction);