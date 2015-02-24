
var readline = require('readline');
var rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.question("Enter number: ",

    function (answer) {
        console.log("", isPrime(answer));
        rl.close();
    }
);

function isPrime(number) {
    //var k = Math.round(number/2);
    for (var i = 2; i < number; i++) {
        if ((number % i ) == 0) {
            break;
        }
    }
    if (i == number) {
        return true;
    }
    console.log("false");
}
