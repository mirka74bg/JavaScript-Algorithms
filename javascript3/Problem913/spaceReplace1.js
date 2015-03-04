/**
 Replaces the white-space characters in a text with &nbsp;. Write JS program spaceReplacer.js that invokes your function with the sample input data below and prints the output at the console. Examples:
 */
function replaceSpaces(arr) {
    var str =''
    var arr1 =arr.split(' ') ;
    for (var i in arr1){
    str +=arr1[i];
    }
    console.log(str);

}

replaceSpaces("But    you were living in another world tryin to get your message through")
