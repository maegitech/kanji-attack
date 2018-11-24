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
    } else {
        var index = questions.indexOf(this.name);
        if (index > -1) {
            questions.splice(index, 1);
        }
    }
}

function answerQuestion() {
    var answerInput = document.getElementById("answerBar").value;
    if (answerInput == document.getElementById("hint").innerHTML) {
        count[0] += 1;
        count[2] += 1;
    } else {
        count[2] += 1;
    }
    if(count[2] > 0){
        $("#instruction").hide();
        $("#count").show();        
    }
}

function updateQuestion() {
    var randomQuestion = questions[Math.floor((Math.random() * questions.length))];
    for (var i in kanji) {
        if(randomQuestion == kanji[i].kanji) {
            document.getElementById("question").innerHTML = kanji[i].kanji;
            document.getElementById("hint").innerHTML = kanji[i].meaning;
        }
    }
    document.getElementById("count").innerHTML = count.join("");
}

function loadBackground() {
    var dir = 'media/';

    var backgrounds = [ 'arches.png',
                        'seigaiha.png',
                        'swirl_pattern.png',
                        'wov.png'];

    var randomCount = Math.round(Math.random() * (backgrounds.length - 1));

    document.body.style.backgroundImage = "url(" + dir + backgrounds[randomCount] + ")";
    document.body.style.backgroundRepeat = "repeat";
}

function createCheckboxes() {
    for (var i in kanji) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = kanji[i].kanji;
        checkbox.value = kanji[i].furigana;
        checkbox.id = kanji[i].romaji;

        var label = document.createElement('label')
        label.appendChild(document.createTextNode(kanji[i].kanji + " " + kanji[i].meaning));

        var br = document.createElement("br");

        document.getElementById("checkboxes").appendChild(checkbox);
        document.getElementById("checkboxes").appendChild(label);
        document.getElementById("checkboxes").appendChild(br);
    }
}

function attachInputHandlers() {
    answerInput = document.getElementById("answerBar");
    
	if(!!answerInput){
		answerInput.addEventListener("keypress", function(a){
            var key = a.keyCode;
			if(key == 13){
                answerQuestion();
                updateQuestion();
                answerInput.value = "";
            }
		});
    }
}

function loadDefaultCheckboxes() {
    document.getElementById("answerBar").value = "";
    document.getElementById("aka").checked = true;
    questions.push("赤");
}

window.onload=function () {
    createCheckboxes();
    attachInputHandlers()
    loadBackground();
    loadDefaultCheckboxes();
    updateQuestion();
    attachCheckboxHandlers();
}