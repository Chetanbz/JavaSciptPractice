let arrayOfNumber = new Array();

for (let i = 0 ; i < 10; i++ ){
    arrayOfNumber.push(getThreeDigitNumber());
}
console.log(arrayOfNumber);

arrayOfNumber.sort(function(a,b) {
                                            return a-b});
console.log(arrayOfNumber);

console.log("Second Minimum Element is " + arrayOfNumber[1] + " ## Second Maximum Element is " +arrayOfNumber[arrayOfNumber.length-]);



function getThreeDigitNumber(){
    let num = Math.floor(Math.random()*1000);
    return num;
}