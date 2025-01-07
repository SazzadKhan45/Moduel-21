function isEven (number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const callTheFunction = isEven(12);
console.log('Input Number is even: ',callTheFunction);

function isOdd (number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}


console.log(isOdd(12));
console.log(isOdd(5))