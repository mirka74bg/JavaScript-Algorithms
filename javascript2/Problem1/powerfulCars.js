/**
 * Created by Mirena on 12/29/14.
 */

//convert car’s kW into hp (horse power). The result should be printed on the console, rounded up to the second sign after the decimal point.
// Run the program through Node.js.

var readline = require('readline');
var rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.question("KWath: ",

    function (answer) {
        console.log("", convertKWtoHP(answer));
        rl.close();
    }
);

function convertKWtoHP(kW){
    var hP = kW/0.745699872;
    hP = (Math.round(hP*100))/100;

    return hP;

}

