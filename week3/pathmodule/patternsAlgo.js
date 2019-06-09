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

var rows = 5;
let printhash = function (rows){
    for(let i=1;i<=rows;i++){
        let abc = '';
        for(let j=1; j<=rows; j++){

            for(let k=1; k<=j;k++){
                if(k=j/2){
                    abc += '#';
                }else {abc += '';}
            }
        }
        console.log(abc);
    }}
printhash(rows);