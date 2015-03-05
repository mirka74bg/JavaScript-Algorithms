/**
 Extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 Write JS program palindromesExtract.js that invokes your function with the sample input data below
 and prints the output at the console.
 */

function findPalindromes(value){
    //var value0= value.replace(/,/g, ""); //get rid of ,
    //var value1= value0.replace( /\./g, ""); //?? how to remove "," ...get rid of .
    var value1 = value.replace( /[\.\,]/g, '');


    //console.log(value);
    //console.log(value1.toLowerCase());

    var array = value1.split(" ");  //convert in array
    //console.log(array);

   //var barray = [];

        for(var i in array) {

        //barray[i] = array[i].split("").reverse().join(""); reversed word
        if ((array[i].toLowerCase()==array[i].split("").reverse().join("").toLowerCase())){
        console.log(array[i].toLowerCase());
        //console.log(barray[i]);

       }

   }
}

findPalindromes('There is a man, his name was Bob.');
findPalindromes('AbBa, arkAKRa')