/**
 checkBrackets(value) check if in a given expression the brackets are put correctly.
 */


function checkBrackets(str) {
    var i;
    var bracket = {
        left:'(',
        right:')'
    };

    var leftBracket = 0;
    var rightBracket = 0;

    for(i = 0; i < str.length; i++) {
        if (bracket.right === str[0]) {
            console.log('Incorrect');
            return;
        }
        else {

            if (bracket.left === str[i]) {
                leftBracket++;
            }
            if (bracket.right === str[i]) {
                rightBracket++;
            }
            if (rightBracket > leftBracket) {
                console.log('Incorrect');
                return;
            }
        }
    }
    if(leftBracket === rightBracket){
        console.log('Correct');
    }
    else {
        console.log('Incorrect')
    }
}

checkBrackets('( b * ))( c + d *2 / ( 2 + ( 12 – c / ))( a + 3 )  ');
checkBrackets('( b * ))( c + d *2 / ( 2 + ( 12 – c / ))( a + 3 )  ');

