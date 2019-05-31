var readline = require("readline-sync");

var num = readline.question("enter a numb for factorial: ");

for (let i=num; i>1;i--){
    num *= i-1;
}
console.log(num)

/*function facto(num){

    if (num<=1){return 1;}
    else{ return num* facto(num-1);}
}

console.log(facto(num));*/