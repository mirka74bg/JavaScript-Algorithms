/**
 Takes as an input a sequence of positive integer numbers and returns the element with the largest sum of its digits.
 The function should take a variable number of arguments. It should return undefined when 0 arguments are passed or
 when some of the arguments is not an integer number.
 */


function findLargestBySumOfDigits(nums) {
    var arr = [];
    var arr1 = [];


    for (var i in arguments) {
        if (typeof(arguments[i])!= "number" || arguments.length == 0  || (arguments[i] - Math.floor(arguments[i])) != 0){
            console.log(undefined);
            return 0;
        } else
            arr.push(arguments[i]);
        //console.log(arr);
    }


    function absValue(arr) {
        for (var i in arr) {
            //console.log(typeof(tempArgs[i]));

            arr[i] = Math.abs(arr[i]);
        }
        return arr;
        //console.log(arr);

    }

    absValue(arr);
    console.log(arr);


    function sumOfDigits(number) {
        var temp = number.toString();
        var sum = 0;
        for (var i = 0; i < temp.length; i++) {

            sum += Number(temp[i]);
        }
        return sum;
    }

    for (var i in arr){
        arr1.push(sumOfDigits(arr[i]));

    }

    // finding the biggest number in in array already in abs
    var max = -1;
    var k = 0;
    for (var i in arr1){
        if (arr1[i]>max){
            max = arr1[i];
            k = Number(i);      //k keeps the index of the biggest number
        }
    }
    console.log(arguments[k]);
}

findLargestBySumOfDigits(8, 44, -99, 98);
