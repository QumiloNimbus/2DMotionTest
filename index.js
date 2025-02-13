//script to make the div draggable
let startX=0,startY=0,newX=0,newY=0;
const card=document.getElementById("card");
const ground=document.getElementById("ground");
let cardOffsetTop=card.offsetTop,cardOffsetLeft=card.offsetLeft;


card.addEventListener('mousedown',objectClick);

function objectClick(event){
    startX=event.clientX;
    startY=event.clientY;

    
    clearInterval(runPhysics)
    document.addEventListener('mousemove',objectMove)
    document.addEventListener('mouseup',objectStop)
}

function objectMove(event){
    newX=event.clientX;
    newY=event.clientY;

    let displacementX=newX-startX;
    let displacementY=newY-startY;

    let cardTop=cardOffsetTop+displacementY;
    let cardLeft=cardOffsetLeft+displacementX;
    card.style.top=cardTop+"px";
    card.style.left=cardLeft+"px";
    // console.log(newX,newY);
    // console.log(card.offsetTop)
}

function objectStop(event){
    cardOffsetLeft=card.offsetLeft;
    cardOffsetTop=card.offsetTop;
    document.removeEventListener('mousemove',objectMove)
    setInterval(physics,1)
    
}


//physics here

let time=new Date();
let startTime=time.getTime();
let X=card.offsetLeft,Y=card.offsetTop;
let velocity=0,velocityX=0,velocityY=0;


function gravityCalculation(){
    let gravity=1000;
    
    newTime=new Date();
    let runTime=newTime.getTime()-startTime;
    runTime/=1000;
    let heightY=velocityY*runTime+1/2*gravity*Math.pow(runTime,2);
    card.style.top=(Y+heightY)+'px';
    // console.log(heightY)
}


console.log();
function physics(){
    let base=500;
    ground.style.top=base+'px';
    gravityCalculation();
    if(card.offsetTop+card.offsetHeight>=base){
        
        card.style.top=(base-card.offsetHeight)+'px';

    }
    
}
let runPhysics=setInterval(physics,1);