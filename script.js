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
        return  playr_selection + "is not a vaild chooice!!"
    }
}
// console.log(round(playerplay(),computerplay()))
function game(){ 
    let score = 0 ;
    let com_score = 0;
    let count = 0 ; 
    while(count != 5){
        let s = round(playerplay(),computerplay()) 
        console.log(s)
        count++;
        if (s.indexOf("win") != -1 ){ 
            score++;
            // alert(score)

        }
        else if (s.indexOf("lose") != -1 ){ 
            com_score ++ ;
        }
        
    }
    let t = 5 - (score + com_score);
    if(com_score > score){ 
        return "The computer win "+com_score +": you "  +score +" Ties :"+ t;
    }
    else  if(com_score < score){ 
        
        return "The You win "+score +": you "  +com_score +" Ties :"+ t;
    }
    else { 
        return "Its a Tie !! no of ties :" + t;
    }

}
alert(game());