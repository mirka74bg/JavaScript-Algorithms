/**
 Reverse the characters of every word in the string but leaves the words in the same order.
 Words are considered to be sequences of characters separated by spaces.
 Write a JavaScript program reverseWords.js that prints on the console the output of the examples below:
 */

function reverseWordsInString(str) {
    var array = str.split(" "); //convert string str to array
    //console.log(array);
for (var i in array){
    array[i] = reverseString(array[i]);

}
console.log(array.join(' '));

}
function reverseString(arr){
    var revStr = [];
    for (var i = arr.length - 1; i >=0; i-- ){
        revStr = revStr.concat(arr[i]);
        //var revStr1 =  revStr.join(''); //premahva ,
    }
    return revStr.join('');

}


reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it ?')