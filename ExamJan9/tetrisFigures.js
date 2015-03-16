/*  Tetris Figures
In the classical Tetris game we have 7 Tetris figures (also called "tetriminos"), shown at the figure on the right:
I, L, J, O, Z, S and T. You are given a rectangular Tetris game field consisting of full end empty cells.
Your task is to write a JavaScript function to count the number of each of these 7 tetriminos (with overlapping, without rotations).
For example, on the figure below we have a game field with
2 "I", 1 "L", 5 "J", 3 "O", 3 "Z", 4 "S" and 3 "T" figures on it.
Input: The input is passed to the first JavaScript
function found in your code as array of strings holding the game field lines.
    Each game field line holds only two letters: '-' and 'o' (empty and full cells).
All game field lines have the same length. The input data will always be valid and in the format described.
    There is no need to check it explicitly.
Output: Print at the console the number of I, L, J, O, Z, S and T tetriminos found in the game field (with overlapping and
without rotations) as JSON string,in the same format like in the sample output below.*/

function solve(input){
    var figures = {"I":0,"L":0,"J":0,"O":0,"Z":0,"S":0,"T":0};
    var keys = Object.keys(figures);

    for (var i=0; i<input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            if (input[i][j] == 'o') {
                for (var k = 0; k < keys.length; k++) {
                    checkElemsOfFigures(keys[k], i, j);
                }
            }
        }
    }

    function checkElemsOfFigures(elem, row, col){
        switch (elem){
            case 'I':
                checkElement(elem, row, col, 1, 0, 2, 0, 3, 0);
                break;
            case 'L':
                checkElement(elem, row, col, 1, 0, 2, 0, 2, 1);
                break;
            case 'J':
                checkElement(elem, row, col,1, 0, 2, 0, 2, -1);
                break;
            case 'O':
                checkElement(elem, row, col,0, 1, 1, 0, 1, 1);
                break;
            case 'Z':
                checkElement(elem, row, col,0, 1, 1, 1, 1, 2);
                break;
            case 'S':
                checkElement(elem, row, col, 0, -1, 1, -1, 1, -2);
                break;
            case 'T':
                checkElement(elem, row, col, 0, 1, 0, 2, 1, 1);
                break;
            }
        }

 function checkElement(elem, row, col, firstRowCheck, firstColCheck, secondRowCheck, secondColCheck,
  thirdRowCheck, thirdColCheck){

     var maxRow = Math.max(firstRowCheck, secondRowCheck, thirdRowCheck);
     var maxCol = Math.max(firstColCheck, secondColCheck, thirdColCheck);
     var minCol = Math.max(firstColCheck, secondColCheck, thirdColCheck);

    if (input[row + maxRow]==undefined ||
        input[row + maxRow][col + maxCol]==undefined ||
        input[row][col + minCol]==undefined){
        return false;
    }
    if (input[row][col] == input[row+firstRowCheck][col + firstColCheck] &&
         input[row][col] == input[row+secondRowCheck][col + secondColCheck] &&
         input[row][col] == input[row+thirdRowCheck][col + thirdColCheck]) {
         figures[elem]++;
    }
 }

console.log(JSON.stringify(figures));
}


solve(["" +
    "--o--o-",
    "--oo-oo",
    "ooo-oo-",
    "-ooooo-",
    "---oo--"
]);