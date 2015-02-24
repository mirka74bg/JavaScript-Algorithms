
/*
Finds if the bit 3 an integer number (counting from 0) is 1. Write JS program checkingBits.js
to check a few numbers. The result (true or false) should be printed on the console.
Run the program through Node.js.
*/

function bitChecker(number){

    var inBit = number.toString(2);
    var n = inBit.length;
    console.log(inBit);


    if (inBit[n-4]==1){
        console.log(true);
    } else {

        console.log(false);

    }


}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);
