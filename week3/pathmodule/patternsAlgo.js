/* var rows = 6;
let printhash = function (rows){
    for(let i=0;i<rows;i++){
        let abc = '';
        for(let j=0; j<=i; j++){
            abc += '#';
        }
        console.log(abc);
    }}
printhash(rows);

#
##
###
####
#####
###### */

/* var rows = 12;
let printhash = function (rows){
    for(let i=1;i<=rows;i++){
        let abc = '';
        for(let j=1; j<=(rows*2); j++){
            if(j<=(rows-i)){
                abc += '_';
            }else if (j>=(rows+i)){
                abc += "_";
            }
            else {abc += '#';}
        }
        console.log(abc);
    }}
printhash(rows);

output:
___________#____________
__________###___________
_________#####__________
________#######_________
_______#########________
______###########_______
_____#############______
____###############_____
___#################____
__###################___
_#####################__
#######################_ */


let a = "alpha"
let b = "hapal"

/* let arrA = a.split('');
console.log(arrA.sort());
let arrB = b.split('');
console.log(arrB.sort());

console.log(JSON.stringify(arrA)==JSON.stringify(arrB)); */

let anagramcheck = function (a,b){
    let arrA = a.split('');
    let arrB = b.split('');
    if (JSON.stringify(arrA.sort())==JSON.stringify(arrB.sort())){
        console.log ('they are anagrams')
    } else {console.log('they are not anagrams')}
}
anagramcheck(a,b);