/**
 * Created by Mirena on 1/22/15.
 */

var like = document.getElementById('myBtn');

function onClickL() {
        if (like.innnerHTML == "Like") {
            like.innnerHTML = "Unlike";
            console.log(like);
        }
        else {
            like.innnerHTML = "Like";
        }
    }

