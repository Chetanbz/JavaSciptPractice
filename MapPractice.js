let map = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
console.log(map);

let diceNumber ;
while(checkIfAnyNumberCountTen()){
    diceNumber = Math.floor( Math.random()*10 )%6 + 1;
    let num  = map.get(diceNumber) + 1;
    map.set(diceNumber,num);
}
console.log(map);





function checkIfAnyNumberCountTen(){
    for (let [key,value] of map.entries()){
        if(value >=10){ return false;}
    }
    return true;
}