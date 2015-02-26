/**
 Function checkDigit(value) finds if the third digit (right-to-left) of an integer number n (n>1000) is 3.
 Write JS program digitChecker.js that checks a few numbers.
 The result (true or false) should be printed on the console. Run the program through Node.js.
 */
function checkDigit(number){
    var nstring = String(number);
    var n = nstring.length;

    if (nstring[n-3]==3){
        console.log(true);
    } else {

        console.log(false);

    }


}

checkDigit(1234);
checkDigit(25368);
checkDigit(123456);

