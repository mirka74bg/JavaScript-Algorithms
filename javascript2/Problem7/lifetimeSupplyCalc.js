/*
Accepts the following parameters: your age (years), your maximum age (years), your favorite food name (e.g. "chocolate"),
estimate amount of your favorite food per day (a number). The function calculates how many of the food you will eat
for the rest of your life. Write JS program lifetimeSupplyCalc.js that calculates the amount of a few foods that you will eat.
 The result should be printed on the console. Run the program through Node.js.
*/

function calcSupply(arr) {
    var qFood = 365 * arr[3] * (arr[1] - arr[0]);
    console.log(qFood + "kg of " + arr[2] + ' would be enough until I am ' + arr[1] + ' years old');
}

calcSupply([38, 118, 'chocolate', 0.5]);
calcSupply([20, 87, 'fruits', 2]);
calcSupply([16, 102, 'nuts', 1.1]);

