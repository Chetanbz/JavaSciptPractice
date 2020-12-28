let arr = [0];
let num = 25;

for(let i = 1; i<= num ; i++){
    arr.push(i);
    arr.push(-i);
}
//console.log(arr);

let arrTriplet = new Array();

for (let i = 0; i< arr.length; i++){
    for(let j = i+1; j< arr.length; j++){
        for(let k = j+1; k< arr.length; k++){
            if(j == k || i == k){continue;}
            let sum = arr[i] + arr[j] + arr[k];
            if(sum == 0){
                arrTriplet.push(("( "+ arr[i] +" " + arr[j] + " " + arr[k]+ " )"));
                
            }
        }
    }
}
console.log("Triplet are " + arrTriplet);

