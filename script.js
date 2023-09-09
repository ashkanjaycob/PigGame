
const diceElement = document.querySelector('.dices');

const playeronescore = document.querySelector('.total-score-one');
const playertwoscore = document.querySelector('.total-score-two');

const currentscoreplayerone = document.querySelector('.p0-current-score');
const currentscoreplayertwo = document.querySelector('.p1-total-score');

let isPlaying = true;
let currenscore = 0;
let activeplayer = 0;
document.querySelector('#btn-roll').addEventListener('click', () => {

    if (isPlaying) {
        randomdice = Math.floor((Math.random() * 6) + 1);
        console.log(randomdice);
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${randomdice}-01.png`;


        if (randomdice !== 1) {
            currenscore += randomdice;
            document.querySelector(`.p${activeplayer}-current-score`).innerHTML = currenscore;
        } else {
            switchPlayer();
        }
    }

})

const switchPlayer = () => {
    currenscore = 0;
    document.querySelector(`.p${activeplayer}-current-score`).innerHTML = currenscore;
    activeplayer = activeplayer === 0 ? 1 : 0;
    // turner opperators  
    document.querySelector('.player-0').classList.toggle('active-player-top');
    document.querySelector('.player-1').classList.toggle('active-player-top');

    document.querySelector('#player-0').classList.toggle('active-player');
    document.querySelector('#player-1').classList.toggle('active-player');

}

let scores = [0,0];

document.querySelector('#btn-hold').addEventListener('click', () => {
    if (isPlaying) {
        scores[activeplayer] += currenscore;
        document.querySelector(`.p${activeplayer}-total-score`).innerHTML = scores[activeplayer];
        if (scores[activeplayer] > 20) {
            document.querySelector(`.p${activeplayer}-winner`).classList.remove('hidden');
            isPlaying = false;
        }
        switchPlayer();
    }
})

document.querySelector('#btn-reset').addEventListener('click', () => {

    document.querySelector(".p0-current-score").innerHTML = 0;
    document.querySelector(".p1-current-score").innerHTML = 0;
    document.querySelector(".p0-total-score").innerHTML = 0;
    document.querySelector(".p1-total-score").innerHTML = 0;
    document.querySelector(`.p0-winner`).classList.add('hidden');
    document.querySelector(`.p1-winner`).classList.add('hidden');

    isPlaying = true;
    alert("Game Have been Restarted ! ")

});