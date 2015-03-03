/**
 checkBrackets(value) check if in a given expression the brackets are put correctly.
 */


function checkBrackets(bracketStr) {
    console.log("The input is: ", bracketStr);
    var brackets = 0;
    for (var i = 0; i < bracketStr.length; i++) {
        switch (bracketStr[i]) {
            case '(' : brackets++; break;
            case ')' : brackets--; break;
        }
        if (brackets < 0) {
            break;
        }
    }//end of the for-loop

    if (brackets == 0) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
checkBrackets('( b * ))( c + d *2 / ( 2 + ( 12 – c / ))( a + 3 )  ');
