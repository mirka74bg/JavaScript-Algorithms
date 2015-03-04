/**
 Accepts as parameter an array of 2 elements arr [keyword, text].
 The function finds how many times a substring is contained in a given text (perform case insensitive search).
 */

function countSubstringOccur(input) {
    var keyword = input[0].toLowerCase();
    var l = keyword.length;
    var arr = input[1].toLowerCase().split(' ');
    var count = 0;
    var countArr = [];

    // console.log(arr)

    for (var i in arr) {
        for (var j in arr[i]) {
            if (keyword[0] == arr[i][j]) {
                subK = arr[i].substr(j, l);
                if (subK == keyword) {
                    count++
                }
                // console.log(subK);
            }
        }
    }
    console.log(count);

}


countSubstringOccur(["in", "We are living In a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);

countSubstringOccur(["but", "But you were living in another world tryin' to get your message through."]);
