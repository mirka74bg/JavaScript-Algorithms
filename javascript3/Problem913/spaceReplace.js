/**
 Replaces the white-space characters in a text with &nbsp;. Write JS program spaceReplacer.js that invokes your function with the sample input data below and prints the output at the console. Examples:
 */
function replaceSpaces(arr) {
   console.log(arr.replace(/' '/g, ''));
   console.log(arr.replace(/\s/g, ""));

}

replaceSpaces("But you were living in another world tryin to get your message through")
