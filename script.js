let gamesq=[];
let usrsq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let highestscore=0;
let highest=document.querySelector(".highest");

document.getElementById("startBtn").addEventListener("click",function(){
   if(started==false){
       console.log("game started");
       started=true;
       
       levelup();

   }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    usrsq=[];
    level++;
    h3.innerText=`level ${level}`;
    
    
    let rdidx=Math.floor(Math.random()*3);
    let rdcolor=btns[rdidx];
    let rdbtn=document.querySelector(`.${rdcolor}`);
    btnflash(rdbtn);
    // console.log(rdidx);
    // console.log(rdcolor);
    // console.log(rdbtn);

    gamesq.push(rdcolor);
    console.log("gamesq",gamesq);

    if(level>highestscore){
        highestscore=level;
        highest.innerText=`Highest Score: ${highestscore}`;
    }
}

function checkans(idx){
    //console.log(`level`,level);
    if(gamesq[idx]==usrsq[idx]){
        if(gamesq.length==usrsq.length){
            setTimeout( levelup,1000);
        }
    }
    else{
        h3.innerText=`Game Over! your score: ${level} press Start to try again`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#273359";
        },150);
    }
}

function btnpress(){
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id");

    // console.log(usercolor);

    usrsq.push(usercolor);
    console.log("usrsq",usrsq);

    checkans(usrsq.length-1);
}

let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    if(level>highestscore){
        highestscore=level;
        highest.innerText=`Highest Score: ${highestscore}`;
    }
    usrsq=[];
    gamesq=[];
    started=false;
    level=0;

}