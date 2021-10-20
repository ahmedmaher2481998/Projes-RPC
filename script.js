/*
Rock’, ‘Paper’ or ‘Scissors’
Understand 



Plan 



Psudo 
fun computer play : 
return a randon r c p 
fun plaer play 
take from user r or c or p 
fun round 
compare use choose to computer choose and determine the winner 


*/
let r =  "Rock";
let p =  "Paper";
let c =  "Scissors";
function computerplay(){ 
  let num = Math.floor(Math.random() * 3 );
if (num == 0) {
    return r;
}
else if (num == 1) {
    return p;
}
else   {
    return c;
}
}
function playerplay(){
    let player = prompt("Whats Your choose!");
    return player;
}
function round(playr_selection,computer_selection = computerplay()){ 
    let cc = playr_selection
    playr_selection = playr_selection.toUpperCase();
    //if you choose rock 
    // you win if the computer choose scissors 
    // you loose if the computer choose paper 
    // you tie if the computer choose the smae 
    if (playr_selection == r.toUpperCase()){ 
        if(computer_selection == c) return "you win "+cc+" beats "+computer_selection
        else if(computer_selection == p) return  "you lose "+computer_selection+" beats "+cc
        else return  "its a Tie"
    }
    else if (playr_selection == c.toUpperCase()){ 
        if(computer_selection == p) return  "you win "+cc+" beats "+computer_selection
        else if(computer_selection == r) return  "you lose "+computer_selection+" beats "+cc
        else return  "its a Tie"
    }
    else if  (playr_selection == p.toUpperCase()){ 
        if(computer_selection == r) return  "you win "+cc+" beats "+computer_selection
        else if(computer_selection == c) return  "you lose "+computer_selection+" beats "+cc
        else return  "its a Tie"
    }
    else { 
        return  playr_selection + "is not a vaild chooice!!")
    }
}
console.log(round(playerplay(),computerplay()));