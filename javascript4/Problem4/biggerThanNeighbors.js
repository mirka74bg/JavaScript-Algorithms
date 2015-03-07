/**
Accept a number and an integer array as parameters. T
 he function should return a Boolean number: whether the element at the given position
 in the array is bigger than its two neighbors (when such exist). It should return undefined
 when the index doesn't exist. Write a JS program that invokes the function with the sample data
 below and prints the result at the console following the samples below:
 */


function biggerThanNeighbors(a,b) {
//console.log(typeof(b))
    var bArray = []
    for (var key in b) {        //loop over object b and map it to an array bArray
        bArray.push(b[key]);
    }
    //console.log(bArray[a]);
    if (a >= bArray.length) {console.log('invalid index'); return};
    if ((a==0) || (a==bArray.length -1)) {console.log('only one neighbor'); return};
    if ((bArray[a]>bArray[a+1]) && (bArray[a]>bArray[a-1])) console.log('bigger');
    if ((!(bArray[a]>bArray[a+1])) || (!(bArray[a]>bArray[a-1]))) {console.log('not bigger'); return};

}


biggerThanNeighbors(2, [1, 2, 3, 3, 5]);
biggerThanNeighbors(2, [1, 2, 5, 3, 4]);
biggerThanNeighbors(5, [1, 2, 5, 3, 4]);
biggerThanNeighbors(0, [1, 2, 5, 3, 4]);
