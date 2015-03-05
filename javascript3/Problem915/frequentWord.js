/**
Finds the most frequent word in a text and prints it,
 as well as how many times it appears in format "word -> count". Consider any non-letter character as a word separator.
 Ignore the character casing. If several words have the same maximal frequency, print all of them in alphabetical order.
 */


function findMostFreqWord(string) {

    var string1 = string.replace(/,/g, ""); //
    var string2 = string1.toLowerCase().replace(/\./g, "");  //?? to do this 2 lines in 1 line
    var array = string2.split(" ");
    //console.log(array);
    var counter = 1;
    var maxCounter = 0;
    //var freqWord = '';
    var arrFreqW = [];
    for (var i = 0; i< array.length-1; i++ ) {
        for (var j = i + 1; j < array.length;  j++) {
            if (array[i] == array[j]) {
                counter++;
               // console.log(array[i], counter);
            }
        }
        if (maxCounter <= counter) {
            if (maxCounter == counter) {
                arrFreqW.push(array[i]);
                //console.log(arrFreqW);

            } else {
                arrFreqW = [];
                maxCounter = counter;
                arrFreqW.push(array[i]);
            }

        }
        counter = 1;
    }

    arrFreqW.sort();

    for (var k = 0; k < arrFreqW.length; k++) {

        console.log((arrFreqW[k]) + " -> " + maxCounter);
        // console.log(i);

    }
    // console.log((arrFreqW) + " -> " + maxCounter);

}


findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
