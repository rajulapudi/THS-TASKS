/*to subtract without using minus sign*/

/*var a = 89;
var b = 7;

let c = ~b;
let subwithoutminus =a+c+1;

console.log("the result is" + subwithoutminus);*/


/*to find remainder without mod function*/

/* max remainder can be a-1*/

/*var a = 44;
var b = 98;

var c = b - a;

for (let i = c; i <= b; i++) {
    if (i / a == 0) {
        console.log(b - i);
    } else {
        continue;
    }

}*/

/*Even or Odd

function eveorodd(x) {
	if (x%2==0) {console.log("Even");}
		else{console.log("Odd")}
	}
*/

/*Write a program to Generate Even and Odd Number less than N and Generate ‘N’
Even and Odd Numbers.*/

/*let n = prompt("Enter a number");
let e = [];
let o = [];

for (var i =n; i >= 0; i--) {
	if (i%2==0){e.push(i)}
		else {o.push(i)}
}*/

/*Write a program to decide given N is Prime or not*/

/*function prime (N){
	if (N==0 || N==1) {return false;}
		else {
			for (var i = 2; i < N; i++) {
				if (N%i === 0) return false;
			}
			return true;
		}
}
*/


/*Write a program to generate Prime Numbers less than N*/
/*function prime (N){
	if (N==0 || N==1) {return false;}
		else {
			for (var i = 2; i < N; i++) {
				if (N%i === 0) return false;
			}
			return true;
		}
}
var p =[];
function primearray (N){
	for (n=N; n>2; n--){
			if (prime(n) == 1){p.push(n);}
		}
		console.log(p);
}
*/

/*for finding remainder*/

var c = 0;
var a = 188;
var b = 4;
for (let i =1; i<a;i++){
    c=a-i*b;
    if(c>=b){
        continue;
    }else {
        console.log(c);
        bre




/*find GCD*/

        let a = 100;
        let b = 75;

        let c = a%b;

        if(c==0){console.log(b);}

        else{
            let d = b%c;
            if (d==0){console.log(c);}
            else {
                let e = c%d;
                if (e==0) {console.log(d);}
            }
        }


let a = 100;
let b = 75;

c = a%b;

let d = 0;
if(c>0){
    d=b%c;
    b=c;
}
let f = d%c
if(f==0){
    console.log(c);
}















)
