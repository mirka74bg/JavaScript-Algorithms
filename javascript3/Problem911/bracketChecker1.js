/**
 checkBrackets(value) check if in a given expression the brackets are put correctly.
 */


function checkBrackets(arr) {
    //var re = /[^()\[\]{}]/g;
    var re = /[^()]/g;

    arrBracketOnly = ("" + arr).replace(re, "");
    var count = 0;

    if (arrBracketOnly[0] == ")"){
        console.log('incorrect')}

    else{
    for (var i = 0; i < arrBracketOnly.length; i++){
        if (arrBracketOnly[i]== '('){
            count++;
        } else {
            count--;
            if (count < 0){            //i mean this check and you have to quit completely in that case
              console.log('incorrect')
             return false;
             }
        }

    }
        if (count == 0) console.log('correct')
        if (count != 0) console.log('incorrect')

    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
checkBrackets('( b * ))( c + d *2 / ( 2 + ( 12 – c / ))( a + 3 )  ');


