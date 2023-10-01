var bbl = "";
var hitNum = 0;


function totalBubble(){
    for(var i=1 ; i<=168; i++){
        var randomNumber = Math.floor(Math.random()*10);
        bbl += `<div id="bubble">${randomNumber}</div>`;
    
        document.querySelector("#pbtm").innerHTML = bbl;
    };
};

function hitCount(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hitNum;
};

var time = 10;
function timeCounter(){
    var timer = setInterval(function(){
        if(time>=0){
            document.querySelector("#timer").innerHTML = time;
            time--;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }

    },1000);
    
};


var count = 0
function scoreCount(){
    count += 10;
    document.querySelector("#score").innerHTML = count;
}

document.querySelector("#pbtm").addEventListener("click", function(e){
    var text = Number(e.target.textContent);
    if(text===hitNum){
        bbl= "";
        totalBubble();
        scoreCount();
        hitCount();
    }
} );


hitCount();
totalBubble();
timeCounter();
