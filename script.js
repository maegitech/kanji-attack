/*
//https://www.dyn-web.com/tutorials/forms/checkbox/group.php
document.getElementById('aka').onclick = function() {
    // access properties using this keyword
    if ( this.checked ) {
        questions.push("aka");
        alert( this.value );
    } else {
        var index = questions.indexOf("aka");
        if (index > -1) {
            questions.splice(index, 1);
        }
    }
};
*/
/*
function toggle(vocab) {
    if ( this.checked ) {
        questions.push(vocab);
        alert( this.value );
    } else {
        var index = questions.indexOf(vocab);
        if (index > -1) {
            questions.splice(index, 1);
        }
    }
}
*/

function toggle(vocab) {
    alert(vocab)
}

window.onload=function () {
    document.getElementById("question").innerHTML = questions;

    for (var i in kanji) {
        var checkbox = document.createElement('input');
        checkbox.onclick = "toggle(" + kanji[i].romaji + ")"
        checkbox.type = "checkbox";
        checkbox.value = kanji[i].furigana;
        checkbox.id = kanji[i].romaji;

        var label = document.createElement('label')
        label.appendChild(document.createTextNode(kanji[i].kanji));

        var br = document.createElement("br");

        document.getElementById("checkboxes").appendChild(checkbox);
        document.getElementById("checkboxes").appendChild(label);
        document.getElementById("checkboxes").appendChild(br);
    }
}