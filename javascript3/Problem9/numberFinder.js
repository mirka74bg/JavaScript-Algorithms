/**
 Finds the most frequent number in an array. If multiple numbers appear the same maximal number of times,
 print the leftmost of them. Write JS program numberFinder.js that invokes your function with the sample input data
 below and prints the output at the console.
 */


function findMostFreqNum(arr) {

    for (var i = 0; i < arr.length - 1; i++){
    for (var j = i; j < arr.length; j++){
        if (arr[i] > arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

}

    var count = 0;
    var countMax = 0;
    var mostFreqNumber = 0;
    for (var i = 0; i < arr.length - 1; i++) {

        if (arr[i] == arr[i+1]){

            count ++;
            if (countMax <= count){

                countMax = count;
                mostFreqNumber = arr[i];
            }

        }
        else {
            count = 0;
        }

    }
    console.log(mostFreqNumber + " (" + (countMax+1)+ " times)");

}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])