/**
 prints the name of an integer number n (0<n<10) in English using switch statement.
 Write JS program digitAsWord.js that prints a few digits on the console.
 */
function convertDigitToWord(value){
        if (arguments[0]>9 || arguments[0]<0) {
            console.log("Enter valid number between 1 and 9");
            return 0;
        }

   // console.log("Enter number 1 to 9: ");
    switch (value)
    {
        case 1 : console.log("One");
            break;
        case 2 : console.log("Two");
            break;
        case 3: console.log("Three");
            break;
        case 4: console.log("Four");
            break;
        case 5: console.log("Five");
            break;
        case 6: console.log("Six");
            break;
        case 7: console.log("Seven");
            break;
        case 8: console.log("Eight");
            break;
        case 9: console.log("Nine");
            break;
        //default: console.log("Unvalid number<br />")
    }



}

convertDigitToWord(11);
convertDigitToWord(3);
convertDigitToWord(5);
