//génère un nb aléatoire pour la face du dé
function getRandom (min,max){

    return Math.floor(Math.random() * (max - min  +1)) + min;
 
}

//fonction pour lancer un dé
function rollDice(target) {

    //dans le DOM ,je crée une div avec classe dice et un enfant "player"
    var dice = document.createElement('div');
    dice.className= 'dice';

    var randomNumber = getRandom(1 , 6);
    dice.style.backgroundPositionX = (randomNumber - 1) * -100 + 'px';

    var player = document.getElementById(target);
    player.appendChild(dice);

}

// Je demande à l'utilisateur combien de dés je lance :
var NbDes = parseInt(prompt('Combien de dés je lance ?'));

// Je lance une boucle for autant de fois que le choix de l'utilisateur (NbDes)
for (var i = 0; i < NbDes ; i++)
{
    rollDice('player');
    rollDice('dealer');

} 