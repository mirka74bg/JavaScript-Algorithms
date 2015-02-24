/*
Check if Number is Prime
Write a JavaScript function isPrime(value) that checks if an integer number is prime.
Write JS program primeChecker.js that checks if a few numbers are prime.
The result should be printed on the console (true or false) on the console. Run the program through Node.js. Examples:
*/



function isPrime(number) {
    //var k = Math.round(number/2);
    for (var i = 2; i < number ; i++) {
        if ((number % i ) == 0) {
            break;
        }
    }
        if (i == number)
        {
            console.log("true");
            return true;
        }
    console.log("false");
        return false;
}


isPrime(7);
isPrime(254);
isPrime(587);
isPrime(19);



