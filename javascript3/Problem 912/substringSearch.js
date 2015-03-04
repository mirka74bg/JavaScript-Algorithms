/**
 Accepts as parameter an array of 2 elements arr [keyword, text].
 The function finds how many times a substring is contained in a given text (perform case insensitive search).
 */


function countSubstringOccur(array){
    var keyword = array[0];
    var str = array[1].split(" ");

    console.log(keyword);
    console.log(str);
    var counter = 0;

   for(var i in str) {

       if (str[i].toLowerCase().indexOf(keyword) > -1) {    // The indexOf() method returns the first index at which
                                                                // a given element can be found in the array, or -1 if it is not present.
           console.log(str[i].toLowerCase().indexOf(keyword));

           counter++;
        }

    }
    console.log(counter);

}


countSubstringOccur(["in", "We are living In a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(["but", "But you were living in another world tryin' to get your message through."]);
