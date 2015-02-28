/**
 Compares two arrays of chars lexicographically (letter by letter).
 Write JS program charComparer.js that invokes your function with the sample
 input data below and prints the output at the console. Examples:
 */

function compareChars(arr1, arr2) {
   // if (arr1.toString() < arr2.toString() || arr1.toString() > arr2.toString()) {
        if (arr1 < arr2 || arr1 > arr2) {

        console.log("Not Equal");

    }  else {
        console.log(" Equal")
    }
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'])