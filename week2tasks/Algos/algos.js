/*var matrix1 = [[[1],[2],[3]],[[4],[5],[6]],[[7],[8],[9]]];


for (let m1index = 0; m1index < matrix1.length; m1index++) {
    for (let m2index = 0; m2index < matrix2.length; m2index++) {
        for (let m3index =0; m3index < matrix1.length; m3index++){
        sum[m1index][m2index][0] = matrix1[m1index][m2index][0] + matrix2[m1index][m2index][0];
    }}

}
console.log(`the sum of two matrices : ${sum}`);*/




var mat = [[7,0,9],
           [1,5,2],
           [3,6,1]] // this is a square matrix of 3 x 3 => which is represented as 2D Array

function diadiff() {
    var sum1 =0;
    var sum2 =0;
    var j=mat.length-1;

    for (let i=0; i<mat.length; i++){
        sum1 += mat[i][i];
        console.log(sum1);
        sum2 += mat[i][j];
        console.log(sum2);
        j=j-1;}
    console.log(sum1,sum2);


    var diadiff = Math.abs(sum1-sum2); // difference of the two diagonals in absolute value
    console.log(`the diagonal sum of a 3 by 3 matrix is : ${diadiff}`);
}

diadiff();

