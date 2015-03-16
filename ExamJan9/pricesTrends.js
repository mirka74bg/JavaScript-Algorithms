
/*
Prices Trends
You are given a list of prices. Your task is to print them in a HTML table: the first column holds a price;
the second column holds a trend. The trend is either fixed (no change) or moving up or moving down.
Fixed is the trend of the first price and when the previous price is the same as the current price (after rounding).
Moving up is when the current price is greater than the previous price (after rounding). Moving down is when the current
price is less than the previous price (after rounding). All numbers are rounded to 2 digits after the decimal point.
See the examples below for better understanding.
    Input: The input is passed to the first JavaScript function found in your code as array of strings holding the
    input numbers. The input data will always be valid and in the format described. There is no need to check it explicitly.
    Output: Print at the console the prices / trends HTML table following the examples below. The table has a fixed
     header defining 2 columns: Price and Trend. The prices column should hold the price, rounded to 2 decimal places. T
     he trend is calculated after rounding (with 2 decimal places) and can be "fixed", "up" or "down".
     Whitespace and character casing are important, so please use the same as in the below examples.
    Constraints
•	The count of input numbers is in the range [0…1 000].
•	All input numbers are in the range [0…1 000 000].
•	Allowed working time: 0.2 seconds. Allowed memory: 16 MB.
*/


function solve(input){

var numbers = [];
    for (var i = 0; i < input.length; i++){
        numbers[i]=Number(parseFloat(input[i]).toFixed(2));
        if (numbers[i]< 0 || numbers[i]>1000000) {
            console.log('The price should be in range 1 to 1000000');
            return 0;
        }

    }
    console.log("<table>\r\n<tr><th>Price</th><th>Trend</th></tr>");

    if (numbers.length > 0 && numbers.length<=1000) {

        console.log('<tr><td>' + numbers[0].toFixed(2) + '</td><td><img src=\"fixed.png\"/></td></td>');
        var image = 'fixed';
        for (var j = 1; j < numbers.length; j++) {
            //numbers[j] < numbers[j-1] ? image='down' : numbers[j] > numbers[j - 1] ? image='up' : image = 'fixed'
            if (numbers[j] < numbers[j - 1]) {
                image = 'down';
            } else if (numbers[j] > numbers[j - 1]) {
                image = 'up';
            } else {
                image = 'fixed';
            }
            console.log('<tr><td>' + numbers[j].toFixed(2) + '</td><td><img src=\"' + image + '.png\"/></td></td>');

        }
    }
    else {
        console.log('The count of input numbers is not in the range [0…1 000].')
    }

    console.log("</table>");
}

solve(["36.333", "36.5", "37.019", "35.4", "35", "35.001", "36.225"]);
