/**
 JavaScript function treeHouseCompare(value) that accepts the following parameters: integers a and b.
 The function compares the area of the house and the area of the tree (Figure 1) and returns the name
 of the figure with bigger area (house or tree) and the value of the area. Write JS program treehouse.js
 that compares a few houses and trees. The result should be printed on the console.
 */

function treeHouseCompare(house, tree){
    //var hRoof= 2 * (house/3);
    var rTree = 3 * (tree/4);
    var areaRoof = house * (house/3);
    var areaHouse = areaRoof + (Math.pow(house, 2));
    var radiusTree = 2 * tree/3;
    var areaTree = Math.pow(tree,2)/3 + Math.PI * Math.pow(radiusTree, 2);
    if (areaHouse > areaTree) {

        console.log("house/", areaHouse.toFixed(2));
    } else {
            console.log("tree/",areaTree.toFixed(2));

            }

    }


treeHouseCompare(3,2);
treeHouseCompare(3,3);
treeHouseCompare(4,5);