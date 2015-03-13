/**
 ou find yourself in a training for being the best parachute jumper in the world.
 At the beginning of the training you need to understand how gravity and wind work.
 You are given all the data from previous jumps of your colleagues. Your task is to
 determine how the jumper will finish his jump and where he will land exactly,
 based on the gravity and wind parameters.
 You are given an array of strings. The jumper can be anywhere in the array
 and is denoted by the "o" symbol. You need to determine the movement of the jumper in iterations.
 On each iteration the jumper moves one line down, pulled by gravity. Additionally, the jumper moves
 sideways by the wind on the current line.
 •    The ">" symbol means the wind is moving the jumper one position to the right.
 •    The "<" symbol means the wind is moving the jumper one position to the left.
 The total direction of the wind on a single line may stack (e.g. ">>>" moves the jumper
 3 positions to the right; "><<" moves the jumper 1 position to the left).
 See examples to better understand the motion of the jumper.
 The jumper can move only through air (the "-" symbol). When the jumper hits the ground, water or a cliff,
 the jump is finished and you need to print the outcome of the jump.
 Input
 The input will be passed to the first JavaScript function found in your code as array of strings, each containing a symbol.
 The symbols are not separated by anything. The input data will always be valid and in the format described.
 Output
 The output consists of two lines. The first line holds a string: "[landing place] ". There are 3 possible outcome messages:
 •    If you have landed on the ground ("_" symbol), you are well and alive: "Landed on the ground like a boss!"
 •    If you have landed in the water ("~" symbol), you have drowned: "Drowned in the water like a cat!"
 •    If you have landed on a cliff ("/", "\" or "|" symbol), you have died: "Got smacked on the rock like a dog!
 The second line holds the position (the row and col) of your landing.
 Constraints
 •    The row and col of the matrix will be in the range [0…10].
 •    The jumper will never fly off the map.
 •    Time limit: 0.3 sec. Memory limit: 16 MB.
 */


function jump(input) {

   // var startX = input[0].indexOf('o');
    var startX;
    var startY;
    var currPos;
    var moveArr = [];
    var landed = true;

    for (var i =0; i< input.length; i++){
        for (var j=0; j<input[i].length; j++){
            if (input[i][j]=='o'){
                startX = j;
                startY = i;
            }

        }
    }
   // console.log(startX, startY);
    var countWind = startX;


    //if (input.length > 10) {
    //    console.log('The map rows should be less than 11')
    //    return 0;
    //}


    for (var i = startY+1; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            if (input[i][j] == ">") {
                countWind++;
            } else if (input[i][j] == "<") {
                countWind--;

            }
        }

    //if (countWind < 0 || countWind >= input[i].length) {
    //    console.log('escaped');
    //    return 0;}
        moveArr.push(countWind);
    }


    //console.log(moveArr);

    for (var j = startY; j < input.length - 1; j++) {
        //console.log(j + 1, moveArr[j-startY])

        if (input[j + 1][moveArr[j-startY]] == '/' ||
            input[j + 1][moveArr[j-startY]] == '\\' ||
            input[j + 1][moveArr[j-startY]] == '|') {
            console.log('Got smacked on the rock like a dog!');
            console.log(j + 1, moveArr[j-startY]);
            break;
        } else if (input[j + 1][moveArr[j-startY]] == '~') {
            console.log('Drowned in the water like a cat!');
            console.log(j + 1, moveArr[j-startY]);
            break;
        } else if (input[j + 1][moveArr[j-startY]] == '_') {
            console.log('Landed on the ground like a boss!');
            //console.log(input[j + 1][moveArr[j-startY]]);
            console.log(j + 1, moveArr[j-startY]);
            break;
        }


    }

    //console.log(input[input.length-1][moveArr[moveArr.length-1]]);
    //console.log(input.length-1, moveArr[moveArr.length-1]);

}

jump(
    [
        "-------------o-<<--------",
        "-------->>>>>------------",
        "---------------->-<---<--",
        "------<<<<<-------/\\--<--",
        "--------------<--/-<\\----",
        ">>--------/\\----/<-<-\\---",
        "---------/<-\\--/------\\--",
        "<-------/----\\/--------\\-",
        "\\------/--------------<-\\",
        "-\\___~/------<-----------"
    ]);
//
jump([
    '--o----------------------',
    '>------------------------',
    '>------------------------',
    '>-----------------/\\-----',
    '-----------------/--\\----',
    '>---------/\\----/----\\---',
    '---------/--\\--/------\\--',
    '<-------/----\\/--------\\-',
    '\\------/----------------\\',
    '-\\____/------------------'])

jump([ "--------\\---/------<-----",
    "-->------|o|-------------",
    "----->---|-|-------<-----",
    "---------|>|<------------",
    "->-------/--\\<--->-------",
    "<---<---/----\\---->----><",
    "->>>>--/-<--</----<---<-<",
    "-------\\>>><<\\-----------",
    ">-------\\----/-->--------",
    "---------\\__/------------"
])

jump([
    "----\\------o-/-----------",
    "<----\\------/------------",
    "------\\----/-------------",
    "<------\\--/--------------",
    "--------|-|--------------",
    "--------/-|--------------",
    "-------/--/--------------",
    "<-----/--/---------------",
    "<-----\\--\\---------------",
    ">-----|__|---------------"])

jump([
    "--->---------------------",
    "------->-----------------",
    "-------------------------",
    "-----------------<-------",
    "-----<--------->---------",
    "-------------------<-----",
    "--------->---------------",
    "----o--------------------",
    ">>>>>>>>>>>>>>>----->----",
    "___/\\_______/\\__~~<<<<---"])