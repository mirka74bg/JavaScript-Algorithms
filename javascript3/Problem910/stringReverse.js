/**
 Reverses string and returns it.
 */


function reverseString(arr){
    var revStr = [];
    for (var i = arr.length - 1; i >=0; i-- ){
        revStr = revStr.concat(arr[i]);
        //var revStr1 =  revStr.join(''); //premahva ,
    }
    console.log(revStr.join(''));

}
reverseString('sample');

//return arr.split("").reverse().join("")