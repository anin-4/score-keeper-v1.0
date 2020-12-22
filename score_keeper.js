

const sp1=document.querySelector('#oneScoreReader');
const sp2=document.querySelector('#twoScoreReader');
const p1=document.querySelector('#player1');
const p2=document.querySelector('#player2');
const button=document.querySelector('button');
let score=document.querySelector('select').value;
score=parseInt(score);

let player1=0;
let player2=0;

button.addEventListener('click',function(e){
    p1.innerText='0';
    p1.style.color='black';
    p2.innerText='0';
    p2.style.color='black';
    player1=0;
    player2=0;
    let score=document.querySelector('select').value;
    score=parseInt(score);
});



sp1.addEventListener('click',function(e){
    player1+=1;
    if(player1+player2===score){
                p1.innerText=`${player1}`;
                if(player1>player2)
                {
                 p1.style.color='green';
                 p2.style.color='red';
                }
                 else{
                 p2.style.color='green';
                 p1.style.color='red';
                 }
                 button.style.backgroundColor='black';
                    button.style.color='white';
        
    }
    else  if(player1+player2<=score){
        p1.innerText=`${player1}`;   
    }
});

sp2.addEventListener('click',function(e){
    player2+=1;
    if(player1+player2===score){
                p2.innerText=`${player2}`;
                if(player1>player2)
                {
                 p1.style.color='green';
                 p2.style.color='red';
                }
                 else
                 {
                 p2.style.color='green';
                 p1.style.color='red';
                 }
                 button.style.backgroundColor='black';
                 button.style.color='white';
        
    }
    else  if(player1+player2<=score){
        p2.innerText=`${player2}`;   
    }

});


