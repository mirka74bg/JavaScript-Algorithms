
function calcCircleArea(r){
    var area = Math.PI * Math.pow(r, 2);
    return area;
}

function userInput(){
    var input = -1;

    while (input !=null){

        input = prompt("Please enter radius: ");
        var output = calcCircleArea(input);

        document.write("r="+input+"; ");
        document.write(output + "<br/>");
        console.log(output);

    }


}











/**
 * Created by Jetchev on 12/28/14.
 */
