let map = new Map()
let month;
for (let i = 1; i <=50 ; i++){
    month = Math.floor(Math.random()*100) % 12 + 1;
    map.set(i,month);
}
console.log("People with month are " + map);
let givenMonth = 8;
let peopleOfMonth = findListOfPeople(givenMonth);
console.log("People with "+ givenMonth+   " bith Month are " + peopleOfMonth);

function findListOfPeople(num){  
    let arrayOfPeople = new Array();
    for(let [key,value] of map.entries()){
        if(value == num){
            arrayOfPeople.push(key);
        }
    }
    return arrayOfPeople;
}