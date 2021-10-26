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
let keys = document.querySelectorAll(".play")
let declearresult = document.createElement("h2");
let score = 0 ; 
let compscore = 0 ;
keys.forEach(key=>{ 
    key.addEventListener('click',(e)=>{ 
        let playr_selection = key.textContent;
        let result =(round(playr_selection,computer_selection = computerplay()));
        let div = document.querySelector(".res");
        declearresult.textContent=result[0];
        div.appendChild(declearresult);
        if(result[1] == 1) score++;
        else if ( result[1] == -1) compscore++;
        
        else if ( score == 5 ||compscore==5 ){ 
            let finalres = document.createElement('h1');
            if(score == 5){ 
                
                finalres.textContent="You win"
            }
            else finalres.textContent = "You lost ";
            console.log(score,compscore);
            div.appendChild(finalres);
        }
        console.log(score,compscore);

        

        
    
    })
 
    
})

let rock =  "Rock";
let paper =  "Paper";
let scissors =  "Scissors";
function computerplay(){ 
  let num = Math.floor(Math.random() * 3 );
if (num == 0) {
    return rock;
}
else if (num == 1) {
    return paper;
}
else   {
    return scissors;
}
}
// function playerplay(){
//     let player = prompt("Whats Your choose!");
//     return player;
// }
function round(playr_selection,computer_selection = computerplay()){ 
    let cc = playr_selection
    playr_selection = playr_selection.toUpperCase();
    //if you choose rock 
    // you win if the computer choose scissors 
    // you loose if the computer choose paper 
    // you tie if the computer choose the smae 
    if (playr_selection == rock.toUpperCase()){ 
        if(computer_selection == scissors) return ["you win "+cc+" beats "+computer_selection,1]
        else if(computer_selection == paper) return  ["you lose "+computer_selection+" beats "+cc,-1]
        else return  ["its a Tie",0];
    }
    else if (playr_selection == scissors.toUpperCase()){ 
        if(computer_selection == paper) return  ["you win "+cc+" beats "+computer_selection,1]
        else if(computer_selection == rock) return  ["you lose "+computer_selection+" beats "+cc,-1]
        else return   ["its a Tie",0];
    }
    else if  (playr_selection == paper.toUpperCase()){ 
        if(computer_selection == rock) return  ["you win "+cc+" beats "+computer_selection,1]
        else if(computer_selection == scissors) return  ["you lose "+computer_selection+" beats "+cc,-1]
        else return   ["its a Tie",0];
    }
    else { 
        return  playr_selection + "is not a vaild chooice!!"
    }
}
// alert(round(playerplay(),computerplay()))
function play5( ){ 
    
}
function game(){ 
    let score = 0 ;
    let com_score = 0;
    let count = 0 ;
    
    
        let s = round(playerplay(),computerplay()) 
        
        
        if (s.indexOf("win") != -1 ){ 

            score++;

        }
        else if (s.indexOf("lose") != -1 ){ 
            com_score ++ ;
        }
        
    
    let tie_count = 5 - (score + com_score);
    
    if(com_score > score){ 
        let message = "The computer win with "+com_score +"wins , you lost with "  +score +" ,Ties :"+ tie_count;
        return console.log(message);
    }
    else  if(com_score < score){ 
        let message = " You win your score: "+score +" ,computer: "  +com_score +" Ties :"+ tie_count;
        return console.log(message);
    }
    else { 
        let message =  "Its a Tie !! no of ties :" + tie_count;
        return console.log(message);
    }

}
