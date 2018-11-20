//https://www.dyn-web.com/tutorials/forms/checkbox/group.php

// call onload or in script segment below form
function attachCheckboxHandlers() {
    // get reference to element containing kanji checkboxes
    var el = document.getElementById('checkboxes');

    // get reference to input elements in checkbox container element
    var tops = el.getElementsByTagName('input');
    
    // assign updateTotal function to onclick property of each checkbox
    for (var i=0, len=tops.length; i<len; i++) {
        if ( tops[i].type === 'checkbox' ) {
            tops[i].onclick = updateTotal;
        }
    }
}

// called onclick of kanji checkboxes
function updateTotal(e) {
    // 'this' is reference to checkbox clicked on
    var form = this.form;
    
    // if check box is checked, push its name to array, otherwise remove it
    if ( this.checked ) {
        questions.push(this.name);
        //updateQuestion();
    } else {
        var index = questions.indexOf(this.name);
        if (index > -1) {
            questions.splice(index, 1);
        }
        //updateQuestion();
    }
}

function updateQuestion() {
    document.getElementById("question").innerHTML = questions[Math.floor((Math.random() * questions.length))];
}
// console.log(questions[Math.floor((Math.random() * questions.length))]);

window.onload=function () {
    for (var i in kanji) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = kanji[i].kanji;
        checkbox.value = kanji[i].furigana;
        checkbox.id = kanji[i].romaji;

        var label = document.createElement('label')
        label.appendChild(document.createTextNode(kanji[i].kanji));

        var br = document.createElement("br");

        document.getElementById("checkboxes").appendChild(checkbox);
        document.getElementById("checkboxes").appendChild(label);
        document.getElementById("checkboxes").appendChild(br);
    }

    answerInput = document.getElementById("answerBar");
	if(!!answerInput){
		answerInput.addEventListener("keypress", function(a){
			var key = a.keyCode;
			if(key == 13){
				updateQuestion();
			}
		});
    }

    updateQuestion();
    attachCheckboxHandlers();
}