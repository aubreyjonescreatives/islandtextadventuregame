/*jslint node:true*/
"use strict";

/*global alert*/



function startGame() {
    document.getElementById("response").innerHTML = "Try to stay alive and reach your goals in this island text adventure game or else your crew will make you walk the plank when you return to your ship! P.S. You don't have enough time to retrace any of your steps, and if you touch the gold star, you will end the game and lose if you touch it too soon! - Sincerely, The Ol' Captain, YR. 1831.";
    
}








/*Gold Coins*/


var goldCoins = ["2", "4", "6", "8", "10"];


var newgoldCoins = goldCoins[Math.floor(Math.random() * goldCoins.length)];

function goldcoinsCount() {
    document.getElementById("goldcoinscount").innerHTML = "Gold Coins: " + newgoldCoins;
    document.getElementById("responseone").innerHTML = "You now have " + newgoldCoins + " Gold Coins!";
}



/*Silver Coins*/


var silverCoins = ["1", "3", "5", "7", "9"];


var newsilverCoins = silverCoins[Math.floor(Math.random() * silverCoins.length)];

function silvercoinsCount() {
    document.getElementById("silvercoinscount").innerHTML = "Silver Coins: " + newsilverCoins;
    document.getElementById("responsetwo").innerHTML = "You now have " + newsilverCoins + " Silver Coins!";
}

/*Bananas*/

var bananasOne = ["3", "5", "7"];


var newbananasOne = bananasOne[Math.floor(Math.random() * bananasOne.length)];

function bananasCount() {
    document.getElementById("bananascount").innerHTML = "Bananas: " + newbananasOne;
    document.getElementById("responsethree").innerHTML = "You found " + newbananasOne + " bananas!";
}



/*Coconuts*/


var coconutsOne = ["1", "3", "5"];


var newcoconutsOne = coconutsOne[Math.floor(Math.random() * coconutsOne.length)];

function coconutsCount() {
    document.getElementById("coconutscount").innerHTML = "Coconuts: " + newcoconutsOne;
    document.getElementById("responsefour").innerHTML = "You now have " + newcoconutsOne + " coconuts!";
}

/*Disguised Rope Traps*/


var ropeTraps = ["1", "2"];


var newropeTraps = ropeTraps[Math.floor(Math.random() * ropeTraps.length)];

function ropetrapsCount(newbananasOne) {
    document.getElementById("ropetrapscount").innerHTML = "Rope Traps: " + newropeTraps;
    if (newbananasOne >= "5") {
        return newbananasOne - newbananasOne; 
    } else {
    document.getElementById("responsefive").innerHTML = "Crazy! You barely managed to get out of a rope trap and luckily still have your bananas! Be careful next time!"
    }
    
}


/*Disguised Grenades*/


var grenadesOne = ["1", "2"];


var newgrenadesOne = grenadesOne[Math.floor(Math.random() * grenadesOne.length)];

function grenadesCount(newcoconutsOne) {
    document.getElementById("grenadescount").innerHTML = "Grenades: " + newgrenadesOne;
     if (newcoconutsOne >= "3") {
        return newcoconutsOne - newcoconutsOne; 
    } else {
    document.getElementById("responsesix").innerHTML = "Yikes! You almost lost some coconuts when you didn't know one was a grenade! Good luck avoiding those in the future!";    
    }
    
}









function endGame() {
    if (newgoldCoins >= 5 && newsilverCoins >= 7 && newbananasOne >= 10 && newcoconutsOne >= 5 && newropeTraps === 0 && newgrenadesOne === 0) {
        document.getElementById("responseseven").innerHTML = "Congratulations! You've Survived!";  
    } else {
        document.getElementById("responseeight").innerHTML = "Oh No! You don't have enough food and supplies! It's Time to Walk the Plank! Better luck next time!";  
    }
    
    
    
    
}
    
    





