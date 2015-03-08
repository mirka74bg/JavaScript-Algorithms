/*
Accepts as parameter an array of persons, finds the youngest person and returns his full name.
Write a JS program youngestPerson.js to execute your function for the below examples and print the result at the console.
*/

    function findYoungestPerson(persons) {
    var min=Number.MAX_VALUE;

    for (var i in persons) {
       if (min > persons[i].age) {
            min= persons[i].age;

           var youngPersonF = persons[i].firstname;
           var youngPersonL = persons[i].lastname;
            }
       }



    console.log("The youngest person is " + youngPersonF + ' ' +youngPersonL);

}
findYoungestPerson([
    { firstname : 'George', lastname: 'Kolev', age: 38},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba1', lastname: 'Ginka1', age: 32},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}])