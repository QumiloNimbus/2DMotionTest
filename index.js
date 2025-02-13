//script to make the div draggable
// let startX=0,startY=0,newX=0,newY=0;

const card=document.getElementById("card");
const ground=document.getElementById("ground");




//physics here


let X=card.offsetLeft,Y=card.offsetLeft;
let initVelocity=0,initVelocityX=0,initVelocityY=-50;
let gravity=2;

let acceleration=0,accelerationX=0,accelerationY=0;
let velocity=0,velocityX=0,velocityY=0;

let base=700;

X+=100;
Y+=base-card.offsetHeight;
let mass=10;
let impulse=mass*100;


velocityY=initVelocityY;
velocityX=initVelocityX;


function gravityCalculation(){
    
    velocityY+=gravity;
}


function objectPosition(){
    velocityY+=accelerationY;
    velocityX+=accelerationX;
}

console.log();


function physics(){

    ground.style.top=base+'px';
    console.log(velocityX,velocityY)
    velocityY.toFixed(2);
    velocityY.toFixed(2);
    X+=velocityX;
    Y+=velocityY;
    

 
    if (Y + card.offsetHeight >base) { 
        Y=base - card.offsetHeight;
        if (Math.abs(velocityY) < 1) {  // Stop small velocity changes
            
            velocityY = 0;
            gravity=0;
        }
        
    } else if(Y + card.offsetHeight ===base){
        velocityY = -velocityY*(0.5); 
        
    }else{
        gravity=2;
        gravityCalculation();
        objectPosition();
    }
    
//    console.log(Y);
//    console.log(velocityY);

    

    card.style.top=Y+'px';
    card.style.left=X+'px';
   
}



let runPhysics;

function startInterval(){
    runPhysics=setInterval(()=>{
        physics();
            
    },10);
}

function stopInterval(){
    clearInterval(runPhysics);
}





//mouse
let cardOffsetTop=X,cardOffsetLeft=Y;
let onCard=false;


card.addEventListener('mousedown',objectClick);

function objectClick(event){
    stopInterval();
    startX=event.clientX;
    startY=event.clientY;

    cardOffsetLeft=card.offsetLeft;
    cardOffsetTop=card.offsetTop;
    
    document.addEventListener('mousemove',objectMove)
    document.addEventListener('mouseup',objectStop)
    
    onCard=true;
}

function objectMove(event){
    newX=event.clientX;
    newY=event.clientY;

    let displacementX=newX-startX;
    let displacementY=newY-startY;

    // Y+=displacementY;
    // X+=displacementX;
    Y=cardOffsetTop+displacementY;
    X=cardOffsetLeft+displacementX;
    
    card.style.top=Y+"px";
    card.style.left=X+"px";
    // console.log("new"+(newX-newY));
    console.log(displacementX,displacementY);
    // console.log("X-Y:"+(X-Y));
}

function objectStop(event){
    
    document.removeEventListener('mousemove',objectMove)
    if(onCard===true){
        startInterval();
        onCard=false;
    }
    
}






startInterval();