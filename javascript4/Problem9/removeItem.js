/**
 *Accept as parameter a number or string. The function should remove all elements with the given value from an array.
 * Attach the function to the Array type. You may need to read about prototypes in JavaScript and how to attach methods to object types. You should return as a result the modified array. Write a sample program to demonstrate that your function works correctly for the examples below:
 */

Array.prototype.removeItem = function(value) {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] == value) {
            this.splice(i, 1);
        }
    }
    return this;
};

var arr = [1, 2, 1, 4, 1, 1, 1, 3, 4, 1, 1, 111, 3, 2, 1, '1'];
var arr2 = ['hi', 'bye', 'hello'];

console.log(arr.removeItem(1));
console.log(arr2.removeItem('bye'));
