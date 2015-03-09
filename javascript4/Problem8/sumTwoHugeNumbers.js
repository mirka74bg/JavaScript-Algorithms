/**
 * Accepts as parameter an array of the two numbers for summing. The input numbers are represented as strings. The result should be printed on the console. Example:
 */
function sumTwoHugeNumbers(value) {

    if (value[0].length < value[1].length) {
        var num0 = value[0];
        var num1 = value[1];
    } else {
        var num0 = value[1];
        var num1 = value[0];
    }

    var addStr=''

    for(var i = 0; i < (num1.length-num0.length); i++){
        addStr +='0';
    }
    num0 = addStr + num0;
    //console.log(num0);
    //console.log(num1);

    var maxl = num1.length+1
    var sum= new Array(maxl);
    var maxll= maxl-1
    var l = num1.length-1;
    sum[maxll] = (parseInt(num0[l])+parseInt(num1[l]))%10;
    while (maxll > 1){
        if (parseInt(num0[l])+parseInt(num1[l]) > 10) {
            sum[maxll-1] = (parseInt(num0[l-1]) + parseInt(num1[l-1])) % 10 + 1;
        } else {
        sum[maxll-1] = (parseInt(num0[l-1])+parseInt(num1[l-1]))%10;}
        maxll--;
        l--;
        //console.log(sum.join(''));

        }
    sum[1]=parseInt(num0[0])+parseInt(num1[0]);
    console.log(sum.join(''));

}




sumTwoHugeNumbers(['155', '65']);
sumTwoHugeNumbers(['123456789', '123456789']);
sumTwoHugeNumbers(['887987345974539','4582796427862587']);
sumTwoHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']);