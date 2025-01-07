function evenSizeString (str){
    const stringSize = str.length;
    if(stringSize % 2 === 0){
        return true
    }
    return false;
}


const inputOne = evenSizeString('Dhaka');
console.log(inputOne);

console.log('---------------');

const inputTwo = evenSizeString('SazzadKhan');
console.log(inputTwo);


function doDuble (number, duble){
    if(number === true){
        const value1 = number * 2
        return value1;
    }
    else{
        const value2 = number * 3;
        return value2;
    }
}

const checkFunction = doDuble(5, false);
console.log(checkFunction);