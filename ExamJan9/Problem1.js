/**
 * Created by Mirena on 2/26/15.
 The base fuel consumption is 10L per 100km. There are 3 fuel types – "gas", "petrol" and "diesel".
 Each type has a correction coefficient c. For gas c = 1.2, for petrol c = 1, for diesel c = 0.8.
 For example if the fuel type is gas the fuel consumption is 1.2*(10L) = 12L per 100km.
 For every kg of luggage you need to add 0.01L extra fuel consumption.
 There are 2 routes to Teteven – route "1" and route "2". Route "1" is long 110km (100km normal road and 10km snowy road).
 Route "2" is long 95km (65km normal road and 30km snowy road). The total fuel consumption is calculated by multiplying
 the base fuel consumption and the total route distance. Then you should add the route's snow distance multiplied by 30%
 of the total fuel consumption. See the example below for further details. When you calculate the fuel consumption you must
 first consider the fuel type and then add the extra fuel consumption needed for the luggage weight.
 In the end you must consider if the road is snowy or not. Then you should round the fuel liters to an integer value.
 Input
 The input data will be received as an array of n elements, each containing a string.
 The string contains 4 arguments – the car model, the fuel type, the route number and the luggage weight.
 The arguments of the input string will always be separated by exactly 1 space. Every argument of the string
 will always consist of only 1 word. The input data will always be valid and in the format described.
 Output
 The output consists of n lines. Each line should hold the car model, the fuel type, the route number and the quantity
 of fuel needed in liters (all space-separated). The quantity of fuel is rounded to an integer number.
 Constraints
 •	The luggage weight will be a floating-point number no greater than 500.
 •	Time limit: 0.3 sec. Memory limit: 16 MB.

 */

function calcFuel(input) {
    var arr = [];
    var extFuelKg;
    var baseFuel;
    var totalConsumption;
    for (var i = 0; i < input.length; i++) {

        currLine = input[i].split(' ');
        //console.log(currLine);
        if (currLine[1] == 'gas') {
            baseFuel = 12 + parseFloat(currLine[3] * 0.01); //12*10
            //console.log(baseFuel);
        }
        if (currLine[1] == 'petrol') {
            baseFuel = 10 + parseFloat(currLine[3] * 0.01); //1*10
            //console.log(baseFuel);
        }
        if (currLine[1] == 'diesel') {
            baseFuel = 8 + parseFloat(currLine[3] * 0.01); //0.8*10
            //console.log(baseFuel);
        }

        if (currLine[2]=='1'){
            totalConsumption = Math.round(1.13 * baseFuel); // 1.1 * baseFuel + 0.03 * baseFuel
            console.log(currLine[0] + ' ' + currLine[1] + ' ' + currLine[2] + ' ' + totalConsumption);
        }
        else{
            totalConsumption = Math.round(1.04 * baseFuel); // 0.95 * baseFuel + 0.03*30 * baseFuel
            console.log(currLine[0] + ' ' + currLine[1] + ' ' + currLine[2] + ' ' + totalConsumption);

           // console.log(totalConsumption);
        }


    }
}

calcFuel(['BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'])