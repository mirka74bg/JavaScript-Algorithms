/**
 Maximal Increasing Sequence
 Finds the maximal increasing sequence in an array of numbers and returns the result as an array.
 If there is no increasing sequence the function returns 'no'. Write JS program maxSequenceFinder.js that invokes your
 function with the sample input data below and prints the output at the console. Examples:
 */

function findMaxSequence(arr) {
    var arrSeq = [];
    var maxArrSeq = [];
    var counter = 0;

    for (var i = arr.length-1; i >= 0; i--) {
        arrSeq[0] = arr[arr.length - 1]
        if (arr[i] > arr[i - 1]) {
            arrSeq.push(arr[i - 1]);
            counter++;
        } else {
            if (counter >= maxArrSeq.length) {
                maxArrSeq = arrSeq;
                    arr = arr.slice(0, i-1);
                    counter = 0;
                    arrSeq = []
                }

                //console.log(arr.length);
                //console.log(maxArrSeq.length)
            }

    }
    if (maxArrSeq.length < 2){
        console.log("No")
    } else

        console.log(maxArrSeq.reverse());
}

findMaxSequence([3, 2, 3, 4, 5, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3,2,1]);