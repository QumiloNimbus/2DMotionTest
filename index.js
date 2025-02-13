//script to make the div draggable
// let startX=0,startY=0,newX=0,newY=0;
let time=new Date();
let startTime=time.getTime();

const card=document.getElementById("card");
const ground=document.getElementById("ground");

let cardOffsetTop=card.offsetTop,cardOffsetLeft=card.offsetLeft;

/*
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
    startTime=time.getTime();
}
*/

//physics here


let X=card.offsetLeft,Y=card.offsetLeft;
let velocity=0,velocityX=0,velocityY=0;
let acceleration=0,accelerationX=0,accelerationY=-999;


function gravityCalculation(time){
    let gravity=1000;
    
    
    let heightY=velocityY*time+1/2*gravity*Math.pow(time,2);
    Y+=heightY;
    // console.log(heightY)
}


function objectPosition(time){
    X+=velocityX*time+1/2*accelerationX*Math.pow(time,2);
    Y+=velocityX*time+1/2*accelerationY*Math.pow(time,2);
}

console.log();
let base=500;

function physics(){
    let newTime=new Date();
    let runTime=newTime.getTime()-startTime;
    runTime/=1000;

    ground.style.top=base+'px';

    
    card.style.top=Y+'px';
    card.style.left=X+'px';

    if(card.offsetTop+card.offsetHeight>=base){
        
        card.style.top=(base-card.offsetHeight)+'px';

    }
    gravityCalculation(runTime);
    objectPosition(runTime);
    
}
let runPhysics=setInterval(()=>{
    if(card.offsetTop+card.offsetHeight<=base){
        physics();
    }
},1);