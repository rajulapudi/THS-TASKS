var readline = require("readline-sync");

/*
var initial = [0, 1];
var maxN = readline.question("How many Fibo #'s do you want?");*/

/*    for (let i=2; i<maxN; i++){
        
        sum = initial[initial.length-2]+initial[initial.length-1];

        initial.push(sum);
    }
console.log (initial);*/
var maxN = readline.question("How many Fibo #'s do you want?");
var initial = [0, 1];

function fibo(maxN) {

    function pushfibo() {
        sum = initial[initial.length - 2] + initial[initial.length - 1];
        initial.push(sum);
    }

    pushfibo();

    if (initial.length >= maxN) {
        return;
    } else {
        fibo(maxN);
    }
}
fibo(maxN);
console.log(initial);
