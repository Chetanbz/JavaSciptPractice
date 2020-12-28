let arr = new Array();
for (let i = 10; i <100; i++ ){
    let num = i % 10;
    let num2 = Math.floor(i/10);
    if(num == num2){
        arr.push(i);
    }
}
console.log(arr);