/**
 Returns the last digit of given integer as an English word. Write a JS program lastDigitOfNumber.js that invokes your function with the sample input data below and prints the output at the console. Examples:
 */

function lastDigitAsText(number){

    var strOfNumber = number.toString();
    var lastDig = strOfNumber[strOfNumber.length-1];
    switch (lastDig) {
        case '0':
            result = "Zero";
            break;
        case '1':
            result = "One";
            break;
        case '2':
            result = "Two";
            break;
        case '3':
            result = "Three";
            break;
        case '4':
            result = "Four";
            break;
        case '5':
            result = "Five";
            break;
        case '6':
            result = "Six";
            break;
        case '7':
            result = "Seven";
            break;
        case '8':
            result = "Eight";
            break;
        case '9':
            result = "Nine";
            break;
    }

    console.log(result);
}

lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);

