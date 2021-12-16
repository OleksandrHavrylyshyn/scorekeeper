const p1 = {
    score: 0,
    button: document.querySelector('.p1Button'),
    display: document.querySelector('#pOne'),
}
const p2 = {
    score: 0,
    button: document.querySelector('.p2Button'),
    display: document.querySelector('#pTwo'),
}

const reset = document.querySelector('.resetButton');
const sel = document.querySelector('#sel');
let maxScore = 5;

p1.button.addEventListener('click', function() {
    p1.score++;
    p1.display.innerText = p1.score;
    gameWon(p1.score,p2.score,maxScore);
})

p2.button.addEventListener('click', function() {
    p2.score++;
    p2.display.innerText = p2.score;
    gameWon(p1.score,p2.score,maxScore);
})

reset.addEventListener('click', function() {
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = p1.score;
    p2.display.innerText = p2.score;
    p1.display.style.color = 'black';
    p2.display.style.color = 'black';
    p1.button.disabled = false;
    p2.button.disabled = false;
})

const gameWon = function (pl1, pl2, max) {
    if(pl1 === max) {
        p1.display.style.color = 'green';
        p2.display.style.color = 'red';
        p1.button.disabled = true;
        p2.button.disabled = true;
    }
    else if(pl2 === max) {
        p1.display.style.color = 'red';
        p2.display.style.color = 'green';
        p1.button.disabled = true;
        p2.button.disabled = true;
    }
}

sel.addEventListener('change', (e) => {
    maxScore = parseInt(e.target.value);
    return maxScore;
})