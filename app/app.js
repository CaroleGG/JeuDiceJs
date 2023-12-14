//tableau vide des dés
let tabDice = [];
let tabDicePlayer = [];
let tabDiceDealer = [];

//génère un nb aléatoire pour la face du dé
function getRandom (min,max){

    return Math.floor(Math.random() * (max - min  +1)) + min;
 
}

//fonction pour lancer un dé
function rollDice(target) {

    //dans le DOM ,je crée une div avec classe dice et un enfant "player"
    const dice = document.createElement('div');
    dice.className= 'dice';

    let randomNumber = getRandom(1 , 6);
 
    dice.style.backgroundPositionX = (randomNumber - 1) * -100 + 'px';
    tabDice.push(randomNumber);
  
    const whoPlays = document.getElementById(target);
    whoPlays.appendChild(dice);

}

// Je lance une boucle for autant de fois que le choix de l'utilisateur (NbDices)
function play(target = 'player') {
    for (let i = 0; i < nbDices ; i++)
{
    rollDice(target);
   
} 
    if (target === 'player'){ 
    setTimeout( play, 1500, 'dealer' );
    }
    //répartition des dés entre les joueurs
    tabDicePlayer = tabDice.slice(0, tabDice.length / 2);
  
    tabDiceDealer = tabDice.slice(tabDice.length/2 , tabDice.length);

  
    let sommePlayer = sommeDice(tabDicePlayer);
    let sommeDealer = sommeDice(tabDiceDealer);

    //TODO finaliser affichage vainqueur
    /*
        setTimeout(function(){
            if(sommeDealer > sommePlayer) {
                 alert('ARF,l\'ordi gagne, vous êtes KO ');
             } else if (sommePlayer === sommeDealer) {
                 alert('match nul, il faut rejouer');
            } else {
                alert('Vous avez gagné , bien joué !!');
            }
       }, 3000);
  
*/
    console.log(sommePlayer);
    console.log(sommeDealer);
}

function sommeDice(array){
    let somme = array.reduce(function(acc, valeur){
        return acc + valeur;
    }, 0);
    return somme;
}

function reset() {
    document.getElementById('player').textContent = '';
    document.getElementById('dealer').textContent = '';
}

//impossible dajouter des arguments a cette fonction directement
function newGame() {
    reset();
    play();
}

function newGameIfSpaceBar(event) {

    if(event.key === ' '){
        newGame();
    }

}
//nb de dés par défaut indiqué dans l'interface
let nbDices = 3;
const nbDiceChoosen = document.getElementById('nb-dice');
nbDiceChoosen.addEventListener('change',function(event) {
    //cible l element HTML qui a declenche levenement et recup sa value
    nbDices = parseInt(event.target.value);
    //mise a jour du nb affiche
    document.getElementById('nb-dice-display').value = nbDices ;
    
});

const playButton = document.getElementById('play-button');
//2 arguments: type devenement et une reference a une fonction a executer
playButton.addEventListener('click', newGame);

document.addEventListener('keyup', newGameIfSpaceBar);

//entete
const title = document.createElement('h1');
title.classList.add('magic');
const span = document.createElement('span');
span.textContent=('Super jeu de dés') ;
title.appendChild(span);
let idUi = document.getElementById('ui');
let firstChild = idUi.firstChild;
idUi.insertBefore(title, firstChild);



