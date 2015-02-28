/**
 JavaScript function displayProperties(value)  displays all the properties of the "document" object in alphabetical order.
 JS program docProperties.js that invokes your function with the sample input data below and prints the output at the console.
 */
window.onload = displayProperties();

//console.log(Object.getOwnPropertyNames(document).sort()+"/n");
//console.dir(document).sort()

function displayProperties() {
        var types = [];
        for (var properties in document) {
                types.push(properties);
        }
}

document.write(types.sort().join('<br/>'));