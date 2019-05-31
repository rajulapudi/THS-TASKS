var initial = [0,1];
var maxN = 10;

    for (let i=2; i<maxN; i++){
        
        sum = initial[initial.length-2]+initial[initial.length-1];

        initial.push(sum);
    }


