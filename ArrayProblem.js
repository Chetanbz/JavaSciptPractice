let arrayOfNumber = new Array();

for (let i = 0 ; i < 10; i++ ){
    arrayOfNumber.push(getThreeDigitNumber());
}
console.log(arrayOfNumber);

let minNumber = Math.min(...arrayOfNumber);
let maxNumber = Math.max(...arrayOfNumber);
console.log(minNumber + " " + maxNumber);

var filteredmin = arrayOfNumber.filter(function(value, index, arr){ 
    return value > minNumber;
});

var filteredmax = arrayOfNumber.filter(function(value, index, arr){ 
    return value < maxNumber;
});

minNumber = Math.min(...filteredmin);
maxNumber = Math.max(...filteredmax);

console.log("Second Minimum Element is " + minNumber + " ## Second Maximum Element is " +maxNumber);

// max Element Findout


function getThreeDigitNumber(){
    let num = Math.floor(Math.random()*1000);
    return num;
}