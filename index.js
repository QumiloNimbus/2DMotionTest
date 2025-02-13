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
let initVelocity=0,initVelocityX=0,initVelocityY=-20;

let acceleration=0,accelerationX=0,accelerationY=0;
let velocity=0,velocityX=0,velocityY=0;


X+=100;
Y+=600;
let mass=10;
let impulse=mass*100;


velocityY=initVelocityY;
velocityX=initVelocityX;


function gravityCalculation(time){
    let gravity=0.5;
    velocityY+=gravity;
}


function objectPosition(){
    velocityY+=accelerationY;
    velocityX+=accelerationX;
}

console.log();
let base=700;

function physics(){

    ground.style.top=base+'px';
    
    X+=velocityX;
    Y+=velocityY;
    card.style.top=Y+'px';
    card.style.left=X+'px';

   
    //debug
    
    
    if(card.offsetTop+card.offsetHeight>=base){
        
        
        // if(velocityY.toFixed(0)==0){
        //     velocityY+=-0.5;
        //     console.log("1");
        // }else{
        //     velocityY=((-0.9)*velocityY);
        //     console.log("2");
        // }
        velocityY=velocityY*(-1);
        
    }

   
    gravityCalculation();
    objectPosition();
   
}

let runPhysics=setInterval(()=>{
    physics();
    console.log(velocityY)
    
},1);