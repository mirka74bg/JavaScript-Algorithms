//function roundNumber(value) that rounds floating-point number using Math.round(), Math.floor().
// Write a JS program roundingNumbers.js that rounds a few sample values. Run the program through Node.js.

    function roundNumber(number) {
        var answer1 = Math.round(number);
        console.log(answer1);
        answer2 = Math.floor(number);
        console.log(answer2);

    }

roundNumber(22.7);
roundNumber(12.3);
roundNumber(58.7);
