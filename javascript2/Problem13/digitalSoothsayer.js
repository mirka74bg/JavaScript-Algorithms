/**
 JavaScript function soothsayer(value) that accepts the following parameters (source arrays):
 array of numbers, array of programming languages, array of cities, array of cars.
 Each array must consist of five elements. The function must return an array result[]
 that consists of one random item from each source array. Write a JS program that prints on
 the console the following output: “You will work result[0] years on result[1].
 You will live in result[2] and drive result[3].”
 */
function soothsayer(inputArr){
   var arr = [];
for (var i=0; i<inputArr.length; i++){
   var k = Math.round(Math.random() * 4)
    //console.log(k);
    //console.log(inputArr[i][k]);
    arr.push(inputArr[i][k])
    }
    console.log("You will work " + arr[0] + " years on " + arr[1] +". You will live in " +arr[2] +" and drive " + arr[3] +".");

}


soothsayer([[3, 5, 2, 7, 9],
    ["Java", "Python", "C#", "JavaScript", "Ruby"],
["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"],
["BMW", "Audi", "Lada", "Skoda", "Opel"]])