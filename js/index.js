var pointsPlayer = 0;
var pointsComputer = 0;
var draw = 0;

var drawHtml = document.getElementById('draw');
var computerHtml = document.getElementById('computer');
var playerHtml = document.getElementById('player');

var optionComputerText;
var optionPlayerText;

var imagePlayer = document.getElementById('imagePlayer');
var imageComputer = document.getElementById('imageComputer');

var result = document.getElementById('result');

function startGame(playerOption){


    switch (playerOption) {
        case 1:
            imagePlayer.style.backgroundImage = 'url(../img/Pedra.png)';
            optionPlayerText = 'Pedra';
            break;
        case 2:
            imagePlayer.style.backgroundImage = 'url(../img/Papel.png)';
            optionPlayerText = 'Papel';
            break;
        case 3:
            imagePlayer.style.backgroundImage = 'url(../img/Tesoura.png)';
            optionPlayerText = 'Tesoura';
            break;
    }

    var optionComputer = getRandomIntInclusive(1, 3);

    switch (optionComputer) {
        case 1:
            imageComputer.style.backgroundImage = 'url(../img/Pedra.png)';
            optionComputerText = 'Pedra';
            break;
        case 2:
            imageComputer.style.backgroundImage = 'url(../img/Papel.png)';
            optionComputerText = 'Papel';
            break;
        case 3:
            imageComputer.style.backgroundImage = 'url(../img/Tesoura.png)';
            optionComputerText = 'Tesoura';
            break;
    }

    



    if(optionPlayerText == 'Pedra'){
        if(optionComputerText == 'Pedra'){
            draw++;
            drawHtml.innerHTML = draw;

            result.innerHTML = 'Draw';
            result.style.color = 'Green';
        }
        if(optionComputerText == 'Papel'){
            pointsComputer++;
            computerHtml.innerHTML = pointsComputer;

            result.innerHTML = 'Computer WINS';
            result.style.color = 'Red';
        }
        if(optionComputerText == 'Tesoura'){
            pointsPlayer++;
            playerHtml.innerHTML = pointsPlayer;

            result.innerHTML = 'Player WINS';
            result.style.color = 'Blue';
        }
    }

    if(optionPlayerText == 'Papel'){
        if(optionComputerText == 'Pedra'){
            pointsPlayer++;
            playerHtml.innerHTML = pointsPlayer;

            result.innerHTML = 'Player WINS';
            result.style.color = 'Blue';
        }
        if(optionComputerText == 'Papel'){
            draw++;
            drawHtml.innerHTML = draw;

            result.innerHTML = 'Draw';
            result.style.color = 'Green';
        }
        if(optionComputerText == 'Tesoura'){
            pointsComputer++;
            computerHtml.innerHTML = pointsComputer;

            result.innerHTML = 'Computer WINS';
            result.style.color = 'Red';
        }
    }

    if(optionPlayerText == 'Tesoura'){
        if(optionComputerText == 'Pedra'){
            pointsComputer++;
            computerHtml.innerHTML = pointsComputer;

            result.innerHTML = 'Computer WINS';
            result.style.color = 'Red';
        }
        if(optionComputerText == 'Papel'){
            pointsPlayer++;
            playerHtml.innerHTML = pointsPlayer;

            result.innerHTML = 'Player WINS';
            result.style.color = 'Blue';
        }
        if(optionComputerText == 'Tesoura'){
            draw++;
            drawHtml.innerHTML = draw;

            result.innerHTML = 'Draw';
            result.style.color = 'Green';
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}