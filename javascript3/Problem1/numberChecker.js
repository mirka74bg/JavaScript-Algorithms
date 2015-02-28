/**
  JavaScript function printNumbers(n) that accepts as parameter integer n.
 The function finds all integer numbers from 1 to n that are not divisible by 4 or by 5.
 Write a JS program numberChecker.js that invokes your function with the sample input data below
 and prints the output at the console.
 Examples:
 */


function printNumbers(n){

    if (n<0) {
        console.log("no");

    }
    for (var i=1; i<=n; i++){
        if ((i%4)!=0 && (i%5)!=0){
            console.log(i);
        }

    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
