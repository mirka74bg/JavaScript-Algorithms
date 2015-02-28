
 /**
 Write a JavaScript function findMaxSequence(value) that finds the maximal sequence of equal elements in an array
 and returns the result as an array. If there is more than one sequence with the same maximal length,
 print the rightmost one.
 */


function findMaxsequence(arr) {
    var counter = 0;
    var maximalSeq = 0;
    var seq = 0;
    var seqPrintArr = [];

    if (arr.length == 1) {
        console.log(arr[0])
    }
    else {

        for (var i  = 0; i < arr.length -1; i++) {
            if (arr[i] === arr[i + 1]) {
                counter++;
                if (maximalSeq <= counter) {
                    maximalSeq = counter;
                    seq = arr[i];
                }
            } else {
                    counter = 0;
                }
            }

                if (maximalSeq == 0) {
                    console.log("No sequence found")
                }



            //var result = arr.slice(indexOfLongest, indexOfLongest)
        for (var j = 0; j <= maximalSeq; j++) {
            seqPrintArr[j] = seq;
        }
        console.log(seqPrintArr);        //console.log(result);


    }



}
findMaxsequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxsequence(['happy']);
findMaxsequence([2, 'qwe', 'qwe', 3, 3, '3']);