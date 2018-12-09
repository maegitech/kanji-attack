function addQuestion(min, max) {
    for(var i in radicals) {
        if(radicals[i].index > min && radicals[i].index <= max) {
            questions.push(radicals[i].character);
        }
    }
}

function removeQuestion(min, max) {
    for(var i in radicals) {
        if (radicals[i].index > min && radicals[i].index <= max) {
            var index = questions.indexOf(radicals[i].character);
            if (index > -1) {
                questions.splice(index, 1);
            }
        }
    }
}

function attachCheckboxHandlers() {
    document.getElementById('checkbox-row1').onclick = function() {
        if ( this.checked ) {
            addQuestion(0, 16);
        } else {
            removeQuestion(0, 16);
        }
    };
    document.getElementById('checkbox-row2').onclick = function() {
        if ( this.checked ) {
            addQuestion(16, 32);
        } else {
            removeQuestion(16, 32);
        }
    };
    document.getElementById('checkbox-row3').onclick = function() {
        if ( this.checked ) {
            addQuestion(32, 48);
        } else {
            removeQuestion(32, 48);
        }
    };
    document.getElementById('checkbox-row4').onclick = function() {
        if ( this.checked ) {
            addQuestion(48, 64);
        } else {
            removeQuestion(48, 64);
        }
    };
    document.getElementById('checkbox-row5').onclick = function() {
        if ( this.checked ) {
            addQuestion(64, 80);
        } else {
            removeQuestion(64, 80);
        }
    };
    document.getElementById('checkbox-row6').onclick = function() {
        if ( this.checked ) {
            addQuestion(80, 96);
        } else {
            removeQuestion(80, 96);
        }
    };
    document.getElementById('checkbox-row7').onclick = function() {
        if ( this.checked ) {
            addQuestion(96, 112);
        } else {
            removeQuestion(96, 112);
        }
    };
    document.getElementById('checkbox-row8').onclick = function() {
        if ( this.checked ) {
            addQuestion(112, 128);
        } else {
            removeQuestion(112, 128);
        }
    };
    document.getElementById('checkbox-row9').onclick = function() {
       if ( this.checked ) {
            addQuestion(128, 144);
        } else {
            removeQuestion(128, 144);
        }
    };
    document.getElementById('checkbox-row10').onclick = function() {
        if ( this.checked ) {
            addQuestion(144, 160);
        } else {
            removeQuestion(144, 160);
        }
    };
    document.getElementById('checkbox-row11').onclick = function() {
        if ( this.checked ) {
            addQuestion(160, 176);
        } else {
            removeQuestion(160, 176);
        }
    };
    document.getElementById('checkbox-row12').onclick = function() {
        if ( this.checked ) {
            addQuestion(176, 192);
        } else {
            removeQuestion(176, 192);
        }
    };
    document.getElementById('checkbox-row13').onclick = function() {
        if ( this.checked ) {
            addQuestion(192, 208);
        } else {
            removeQuestion(192, 208);
        }
    };
    document.getElementById('checkbox-row14').onclick = function() {
        if ( this.checked ) {
            addQuestion(208, 214);
        } else {
            removeQuestion(208, 214);
        }
    };
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

function createTable() {
    var arr = [];
    var j = 0;

    for (var i in radicals) {
        arr.push(radicals[i].character);
    }
    
    for (var i in arr) {
        var box = document.createElement('td');
        var boxText = document.createTextNode(arr[i]);
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        
        if(i % 17 == 0) {
            var tr = document.createElement("tr");
            j += 1;
        }
    
        checkbox.id = "checkbox-row" + j;
        
        document.getElementById("radical-table").appendChild(tr);
        tr.appendChild(box);
        if(i % 17 == 0) {
            box.appendChild(checkbox);
        } else {
            box.appendChild(boxText);
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
        if(radicals[i].index <= 16) {
            document.getElementById("checkbox-row1").checked = true;
            questions.push(radicals[i].character);
        }
    }
}

window.onload=function () {
    loadBackground();
    createTable();
    attachInputHandlers();
    loadDefaultCheckboxes();
    updateQuestion();
    attachCheckboxHandlers();
}