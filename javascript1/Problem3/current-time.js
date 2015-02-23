/**
 * Created by Jetchev on 12/28/14.
 */
var sega = new Date();

//sega.setHours(2,2);


var chas = sega.getHours();
var min = sega.getMinutes();

if (min<10){
  min = "0"+min;
}

console.log(chas + ":" + min);

