for (let index = 0; index < localStorage.length; index++) {
    let element = localStorage.key(index);
    if(element != 'china1' && element != 'china2' && element != 'italy1' && element != 'italy2' && element != 'usa1' && element != 'usa2' && element != 'br1' && element != 'br2') {
        localStorage.removeItem(element);
    }
}

let guessTime = 0;
let guessers = [];
        function checkCompletion() {
            let playerName = document.querySelector('#name').value;
            let playerColor = document.querySelector('#color').value;
            let playerFood = document.querySelector('#food').value;
            let playerMusic = document.querySelector('#music').value;
            let playerFilm = document.querySelector('#film').value; 
            let guessers = document.querySelector('#guessers').value;

            let Player = {
                name: playerName,
                guessers: guessers
            }
            localStorage.setItem('currentPlayerName', JSON.stringify(Player));
            var els = [];
            els[0] = playerName;
            els[1] = playerColor;
            els[2] = playerFood;
            els[3] = playerMusic;
            els[4] = playerFilm;
            els[5] = guessers;
            
            var isDone = [];
            els.forEach(el => {
                if (el !== '' && el !== undefined && el > '0') {
                    isDone.push(true);
                    document.getElementById('send').disabled = false;
                } else {
                    isDone.push(false);
                }
            })
            if (isDone.includes(false)) {
                document.getElementById('send').disabled = true;

            }
        }

        function checkGuesserInput() {
            let guesserName = document.querySelector('#guesserName').value;
            let colorGuess = document.querySelector('#colorGuess').value;
            let foodGuess = document.querySelector('#foodGuess').value;
            let musicGuess = document.querySelector('#musicGuess').value;
            let filmGuess = document.querySelector('#filmGuess').value; 
            var els = [];
            els[0] = guesserName;
            els[1] = colorGuess;
            els[2] = foodGuess;
            els[3] = musicGuess;
            els[4] = filmGuess;

            var isDone = [];
            els.forEach(el => {
                if (el !== '' && el !== undefined && el > '0') {
                    isDone.push(true);
                    document.getElementById('send').disabled = false;
                } else {
                    isDone.push(false);
                }
            })
            if (isDone.includes(false)) {
                document.getElementById('send').disabled = true;

            }
        }

        function getGuess() {
            let Guesser = {
                name: document.querySelector('#guesserName').value,
                color: document.querySelector('#colorGuess').value,
                food: document.querySelector('#foodGuess').value,
                music: document.querySelector('#musicGuess').value,
                film: document.querySelector('#filmGuess').value,
                code: 10
            }
            
            localStorage.setItem(`${Guesser.name}`, JSON.stringify(Guesser));

            let player = JSON.parse(localStorage.currentPlayerName);
            console.log(player);
            if(guessTime < player.guessers){
                newForm();
            } else {
                window.location.href = 'displayResult.php'
            }
        }
        

        function newForm() {
            guessTime++;
            let dude = JSON.parse(localStorage.currentPlayerName);
            let player = JSON.parse(localStorage.currentPlayerName);
            if(guessTime > 1) {
                let guesserForm = document.getElementById('guesserForm');
                document.getElementById('body').removeChild(guesserForm);
            }
            let body = document.getElementById('body');
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'flex col');
            newDiv.setAttribute('id', 'guesserForm');
            body.insertBefore(newDiv, body.childNodes[2]);
            let form = document.createElement('form');
            let guesserForm = document.getElementById('guesserForm');
            let h2 = document.createElement('h2');
            h2.textContent = `Guesser #${guessTime}`;
            guesserForm.appendChild(h2);
            let formDiv1 = document.createElement('div');
            formDiv1.setAttribute('class', 'form-group');
            guesserForm.appendChild(formDiv1);

            let formGroup = document.querySelector('.form-group');
            let label = document.createElement('label');
            label.textContent = `Guesser Name`;
            formGroup.appendChild(label);
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('class', 'form-control');
            input.setAttribute('id', 'guesserName');
            input.setAttribute('name', 'guesserName');
            input.setAttribute('oninput', 'checkGuesserInput()');
            formGroup.appendChild(input);
            let label1 = document.createElement('label');
            label1.textContent = `The Favorite Color of ${dude.name}`;
            formGroup.appendChild(label1);
            let input1 = document.createElement('input');
            input1.setAttribute('type', 'text');
            input1.setAttribute('class', 'form-control');
            input1.setAttribute('id', 'colorGuess');
            input1.setAttribute('name', 'colorGuess');
            input1.setAttribute('oninput', 'checkGuesserInput()');
            formGroup.appendChild(input1);
            let label2 = document.createElement('label');
            label2.textContent = `The Favorite Food of ${dude.name}`;
            formGroup.appendChild(label2);
            let input2 = document.createElement('input');
            input2.setAttribute('type', 'text');
            input2.setAttribute('class', 'form-control');
            input2.setAttribute('id', 'foodGuess');
            input2.setAttribute('name', 'foodGuess');
            input2.setAttribute('oninput', 'checkGuesserInput()');
            formGroup.appendChild(input2);
            let label3 = document.createElement('label');
            label3.textContent = `The Favorite Music of ${dude.name}`;
            formGroup.appendChild(label3);
            let input3 = document.createElement('input');
            input3.setAttribute('type', 'text');
            input3.setAttribute('class', 'form-control');
            input3.setAttribute('id', 'musicGuess');
            input3.setAttribute('name', 'musicGuess');
            input3.setAttribute('oninput', 'checkGuesserInput()');
            formGroup.appendChild(input3);
            let label4 = document.createElement('label');
            label4.textContent = `The Favorite Film of ${dude.name}`;
            formGroup.appendChild(label4);
            let input4 = document.createElement('input');
            input4.setAttribute('type', 'text');
            input4.setAttribute('class', 'form-control');
            input4.setAttribute('id', 'filmGuess');
            input4.setAttribute('name', 'filmGuess');
            input4.setAttribute('oninput', 'checkGuesserInput()');
            formGroup.appendChild(input4);

            let button = document.createElement('button');
            button.setAttribute('type', 'submit');
            button.setAttribute('class', 'btn btn-primary');
            button.setAttribute('disabled', 'true');
            button.setAttribute('id', 'send');
            button.setAttribute('onclick', 'getGuess()');
            button.textContent = 'Guess It'
            guesserForm.appendChild(button);
        }

        function getUser(){
            let Player = {
                name: document.querySelector('#name').value,
                color: document.querySelector('#color').value,
                food: document.querySelector('#food').value,
                music: document.querySelector('#music').value,
                film: document.querySelector('#film').value,
                manyGussers: document.querySelector('#guessers').value
            }
            localStorage.setItem(`${Player.name}`, JSON.stringify(Player));
            let playerForm = document.getElementById('playerForm');
            document.getElementById('body').removeChild(playerForm);
            newForm();
        }

        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }