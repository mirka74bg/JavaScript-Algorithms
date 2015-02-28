/**
 JavaScript function findMinAndMax(value) that accepts as parameter an array of numbers.
 The function finds the minimum and the maximum number.
 */

function findMinAndMax(arr) {

    var minNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {

            minNum = arr[i];

        }

    }

    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {

            maxNum = arr[i];

        }

    }

    console.log('Min ->' + minNum);
    console.log('Max ->' + maxNum);

    //console.log('Min -> '+ Math.min.apply(null, arr));
    //console.log('Max -> '+ Math.max.apply(null, arr));
}

findMinAndMax ([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax ([2, 2, 2, 2, 2]);
findMinAndMax ([500, 1, -23, 0, -300, 28, 35, 12]);