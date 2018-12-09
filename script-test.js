/*-
function test(min, max) {
    console.log(min, max);
}

for (var i = 1; i <= 14; i++) {
    var j = i - 1;

    if(j == 0) {
        test(j, j + 16);
    } else if (j > 0 && j < 13) {
        test(j * 16, (j * 16) + 16);
    } else {
        test(j * 16, (j * 16) + 6);
        console.log(j);
    }
}

// get reference to element containing toppings checkboxes
var el = document.getElementById('toppings'); // create an array using 'window'

// get reference to input elements in toppings container element
var tops = el.getElementsByTagName('input');

// assign function to onclick property of each checkbox
for (var i=0; i<tops.length; i++) { // for loop should treat each index as its own el var
    if ( tops[i].type === 'checkbox' ) {
        tops[i].onclick = function() {
            // put your awesome code here
        }
    }
}
*/

for (var i = 0; i <= 14; i++) {
    console.log("\"checkbox-row" + i + "\",");
}