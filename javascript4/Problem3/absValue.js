/**
 * Created by Mirena on 3/06/15.
 */


function absValue(arr) {
    for (var i in arr) {
        //console.log(typeof(tempArgs[i]));

        arr[i] = Math.abs(arr[i]);
    }
    console.log(arr);

}

absValue([33, 44, -99, 98])

function maxElement(arr1) {
    var max = -1;
    var k = 0;
    for (var i in arr1) {
        if (arr1[i] > max) {
            max = arr1[i];
            k = Number(i);
        }
    }
    console.log(max, k)
}

maxElement([33, 44, -99, 98])
