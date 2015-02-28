/*
Allocates array of 20 integers and initializes each element by its index multiplied by 5.
*/


    function createArray() {

    var myArr = [];
    for (var i=0; i < 20; i++){
        myArr[i] = i * 5;
        //console.log(myArr[i]);

    }
     console.log(myArr.join(','));

 }

createArray();



