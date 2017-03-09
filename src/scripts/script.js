var lifes = 10;
var visualTime = 1500;
var isClick = 0;
var isEnd = false;


function changeVisible() {
    if(isEnd) {
        return;
    }
    setInterval(function () {
        if(isEnd) {
            return;
        }
        var randNumOfBut = randomInteger(1, 2);
        if (randNumOfBut == 2) {
            var randomBut = randomInteger(1, 4);
            var randomBut1 = randomInteger(1, 4);
            while (randomBut1 == randomBut) {
                var randomBut1 = randomInteger(1, 4);
            }
            var but = document.getElementById(randomBut);
            var but2 = document.getElementById(randomBut1);
            setTimeout(function () {
                but.style.visibility = 'visible';
                but2.style.visibility = 'visible';
                setTimeout(function () {
                    if(isClick == 1) {
                        lifes--;
                    } else if (isClick == 0) {
                        lifes-=2;
                    }
                    but.style.visibility = 'hidden';
                    but2.style.visibility = 'hidden';
                }, visualTime);
                isClick = 0;
            }, visualTime);
        } else if (randNumOfBut == 1) {
            var randomBut = randomInteger(1, 4);
            var but = document.getElementById(randomBut);
            setTimeout(function () {
                but.style.visibility = 'visible';
                setTimeout(function () {
                    if(isClick == 0) {
                        lifes--;
                    }
                    but.style.visibility = 'hidden';
                }, visualTime);
                isClick = 0;
            }, visualTime);
        }
        if (visualTime > 100) {
            visualTime -= 100;
        } else {
            visualTime = 100;
            //console.log("ASD");
        }
        if(lifes == 0) {
            console.log("LOSE");
            isEnd = true;
            alert("Вы проиграли!");
        }
        console.log(lifes);
    }, 2000);
    
};

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function isClicked() {
    console.log("Кнопка нажата");
    isClick++;
}