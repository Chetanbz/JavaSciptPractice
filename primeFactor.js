let num =  134;
let maxprimeFactor = Math.floor(num/2)+1;
console.log(maxprimeFactor);

let primeFactors = findPrimeFactor();
console.log(" Prime FactorList is " + primeFactors);

let primeFactorList = primeFactors.filter(function(value, index, arr){ 
    if(num % value == 0){ return true;}
});

console.log("Prime Factor Which divide "+ num +" are " + primeFactorList);



function findPrimeFactor(){
    let arr =  [2];
    for (let i = 3; i <= maxprimeFactor; i = i + 2 ){
        let result = arr.filter(function(value, index, arr){ 
            if(i % value == 0){ return true;}
        });
        if(result.length == 0){
            arr.push(i);
        } 
    }
    return arr;
}



