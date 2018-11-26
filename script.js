// call onload or in script segment below form
function attachCheckboxHandlers() {
    // get reference to element containing kanji checkboxes
    var el = document.getElementById('checkbox-group1');

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
    for (var i in radicals) {
        if(randomQuestion == radicals[i].character) {
            document.getElementById("question").innerHTML = radicals[i].character;
            document.getElementById("hint").innerHTML = radicals[i].meaning;
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
    for (var i in radicals) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = radicals[i].character;
        checkbox.value = radicals[i].meaning;
        checkbox.id = radicals[i].meaning;

        var label = document.createElement('label')
        label.appendChild(document.createTextNode(radicals[i].character + " " + radicals[i].meaning + " " + radicals[i].index));

        var br = document.createElement("br");
        
        var val = radicals[i].index;
        
        if (val <= 16) {
            document.getElementById("checkbox-group1").appendChild(checkbox);
            document.getElementById("checkbox-group1").appendChild(label);
            document.getElementById("checkbox-group1").appendChild(br);
        } else if (val <= 32) {
            document.getElementById("checkbox-group2").appendChild(checkbox);
            document.getElementById("checkbox-group2").appendChild(label);
            document.getElementById("checkbox-group2").appendChild(br);
        } else if (val <= 48) {
            document.getElementById("checkbox-group3").appendChild(checkbox);
            document.getElementById("checkbox-group3").appendChild(label);
            document.getElementById("checkbox-group3").appendChild(br);
        } else if (val <= 64) {
            document.getElementById("checkbox-group4").appendChild(checkbox);
            document.getElementById("checkbox-group4").appendChild(label);
            document.getElementById("checkbox-group4").appendChild(br);
        } else if (val <= 80) {
            document.getElementById("checkbox-group5").appendChild(checkbox);
            document.getElementById("checkbox-group5").appendChild(label);
            document.getElementById("checkbox-group5").appendChild(br);
        } else if (val <= 96) {
            document.getElementById("checkbox-group6").appendChild(checkbox);
            document.getElementById("checkbox-group6").appendChild(label);
            document.getElementById("checkbox-group6").appendChild(br);
        } else if (val <= 112) {
            document.getElementById("checkbox-group7").appendChild(checkbox);
            document.getElementById("checkbox-group7").appendChild(label);
            document.getElementById("checkbox-group7").appendChild(br);
        } else if (val <= 128) {
            document.getElementById("checkbox-group8").appendChild(checkbox);
            document.getElementById("checkbox-group8").appendChild(label);
            document.getElementById("checkbox-group8").appendChild(br);
        } else if (val <= 144) {
            document.getElementById("checkbox-group9").appendChild(checkbox);
            document.getElementById("checkbox-group9").appendChild(label);
            document.getElementById("checkbox-group9").appendChild(br);
        } else if (val <= 160) {
            document.getElementById("checkbox-group10").appendChild(checkbox);
            document.getElementById("checkbox-group10").appendChild(label);
            document.getElementById("checkbox-group10").appendChild(br);
        } else if (val <= 176) {
            document.getElementById("checkbox-group11").appendChild(checkbox);
            document.getElementById("checkbox-group11").appendChild(label);
            document.getElementById("checkbox-group11").appendChild(br);
        } else if (val <= 192) {
            document.getElementById("checkbox-group12").appendChild(checkbox);
            document.getElementById("checkbox-group12").appendChild(label);
            document.getElementById("checkbox-group12").appendChild(br);
        } else if (val <= 208) {
            document.getElementById("checkbox-group13").appendChild(checkbox);
            document.getElementById("checkbox-group13").appendChild(label);
            document.getElementById("checkbox-group13").appendChild(br);
        } else if (val <= 214) {
            document.getElementById("checkbox-group14").appendChild(checkbox);
            document.getElementById("checkbox-group14").appendChild(label);
            document.getElementById("checkbox-group14").appendChild(br);
        }
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
    for (var i in radicals) {
        if(radicals[i].index == 1) {
            document.getElementById(radicals[i].meaning).checked = true;
            questions.push(radicals[i].character);
        }
    }
}

function check(max) {
    for (var i in radicals) {
        if(radicals[i].index <= max) {
            document.getElementById(radicals[i].meaning).checked = true;
            questions.push(radicals[i].character);
        }
    }
}

window.onload=function () {
    createCheckboxes();
    attachInputHandlers()
    loadBackground();
    loadDefaultCheckboxes();
    updateQuestion();
    attachCheckboxHandlers();
}