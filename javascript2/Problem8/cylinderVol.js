/**
 * Created by Chavdarova on 12/31/14.
 */
function calcCylinder(radius, height) {

    var vol = Math.PI * Math.pow(radius,2) * height;
    console.log(vol.toFixed(3));
}

calcCylinder(2, 4);
calcCylinder(5, 8);
calcCylinder(12, 3);
