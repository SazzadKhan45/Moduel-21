function tenTimes (number){
    const result = number * 10;
    return result;
}


tenTimes(12);

function add (price1, price2){
    const totalPrice = price1 + price2;
    return totalPrice;
}


const callTheFunction = add(24, 25);

console.log('Total price is :', callTheFunction);