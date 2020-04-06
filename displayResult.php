<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="result.css">
    <link rel="stylesheet" href="index.css">
</head>
<body id="body">
<?php include "navbar.php" ?>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script>
        function clean(){
            for (let index = 0; index < localStorage.length; index++) {
                let element = localStorage.key(index);
                if(element != 'china1' && element != 'china2' && element != 'italy1' && element != 'italy2' && element != 'usa1' && element != 'usa2' && element != 'br1' && element != 'br2') {
                    localStorage.removeItem(element);
                }
            }
            window.location.href = 'guessing.php';
        }

        let body = document.getElementById('body');
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'flex col');
            newDiv.setAttribute('id', 'guesserForm');
            body.insertBefore(newDiv, body.childNodes[2]);
            let form = document.createElement('form');
            let guesserForm = document.getElementById('guesserForm');
            let h2 = document.createElement('h2');
            h2.textContent = `Result`;
            guesserForm.appendChild(h2);
            let formDiv1 = document.createElement('div');
            formDiv1.setAttribute('class', 'form-group');
            guesserForm.appendChild(formDiv1);
            
            let player = JSON.parse(localStorage.getItem(`currentPlayerName`));
            console.log(player);
            let formGroup = document.querySelector('.form-group');
            let p = document.createElement('p');
            p.textContent = `Player's Name: ${player.name}`;
            formGroup.appendChild(p);
            let p1 = document.createElement('p');
            let playerData = JSON.parse(localStorage.getItem(`${player.name}`));
            console.log(playerData);
            p1.textContent = `The Favorite Color of ${playerData.name} is: ${playerData.color}`;
            formGroup.appendChild(p1);
            let p2 = document.createElement('p');
            p2.textContent = `The Favorite Food of ${playerData.name} is: ${playerData.food}`;
            formGroup.appendChild(p2);
            let p3 = document.createElement('p');
            p3.textContent = `The Favorite Music of ${playerData.name} is: ${playerData.music}`;
            formGroup.appendChild(p3);
            let p4 = document.createElement('p');
            p4.textContent = `The Favorite Film of ${playerData.name} is: ${playerData.film}`;
            formGroup.appendChild(p4);
            let button = document.createElement('button');

            for (let index = 0; index < localStorage.length; index++) {

                let element = localStorage.key(index);
                let array = localStorage.getItem(`${element}`);
                let newElement = JSON.parse(array);

                if(newElement.code == '10'){
                    body.insertBefore(newDiv, body.childNodes[index]);
                    let form = document.createElement('form');
                    let guesserForm = document.getElementById('guesserForm');
                    let formDiv1 = document.createElement('div');
                    formDiv1.setAttribute('class', 'form-group');
                    formDiv1.setAttribute('id', `form-group`);
                    guesserForm.appendChild(formDiv1);
                    let p = document.createElement('p');
                    p.textContent = `Guesser Name ${newElement.name}`;
                    formDiv1.appendChild(p);
                    let p1 = document.createElement('p');
                    p1.textContent = `${newElement.name} color guess: ${newElement.color}`;
                    formDiv1.appendChild(p1);
                    let p2 = document.createElement('p');
                    p2.textContent = `${newElement.name} food guess: ${newElement.food}`;
                    formDiv1.appendChild(p2);
                    let p3 = document.createElement('p');
                    p3.textContent = `${newElement.name} music guess: ${newElement.music}`;
                    formDiv1.appendChild(p3);
                    let p4 = document.createElement('p');
                    p4.textContent = `${newElement.name} film guess: ${newElement.film}`;
                    formDiv1.appendChild(p4);
                }
            }
            button.setAttribute('type', 'submit');
                    button.setAttribute('class', 'btn btn-primary');
                    button.setAttribute('id', 'send');
                    button.setAttribute('onclick', 'clean()');  
                    button.textContent = 'Play Again!'
                    newDiv.appendChild(button);
    </script>
</body>
</html>