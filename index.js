//script to make the div draggable
// let startX=0,startY=0,newX=0,newY=0;

const card=document.getElementById("card");
const ground=document.getElementById("ground");




//physics here


let X=card.offsetLeft,Y=card.offsetLeft;
let initVelocity=0,initVelocityX=0,initVelocityY=-30;
let gravity=0.5;

let acceleration=0,accelerationX=0,accelerationY=0;
let velocity=0,velocityX=0,velocityY=0;

let base=1000;

X+=2000;
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



let bounceFactor=0.7;
let thresholdVelocity=Math.sqrt(2 * gravity);
let i=0;



function physics(){

    ground.style.top=base+'px';
    
    
    X+=velocityX;
    Y+=velocityY;
 
    if (Y + card.offsetHeight >base) { 
        Y=base - card.offsetHeight;
        velocityY = -velocityY*Math.pow(bounceFactor,i);
        i+=1;
        gravity=0;
        // console.log(1)
        if(velocityY===0 || velocityY===-0 || Math.abs(velocityY)<=1){
            velocityY=0;
        }
    } 
    else if(Y + card.offsetHeight ===base){
        i+=1;
        velocityY=-velocityY*Math.pow(bounceFactor,i);
        
        if(velocityY===0 || velocityY===-0 || Math.abs(velocityY)<=1){
            velocityY=0;
        }
        
        gravity=1;

        // console.log(2)
    }
    else{
        gravity=1;
        
        gravityCalculation();
        objectPosition();

        // console.log(3)
    }

    

    
   
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
    
    startX=event.clientX;
    startY=event.clientY;

    cardOffsetLeft=card.offsetLeft;
    cardOffsetTop=card.offsetTop;
    
    document.addEventListener('mousemove',objectMove)
    document.addEventListener('mouseup',objectStop)
    
    onCard=true;

    // velocityY=0;
    // velocityX=0;
    i=1;
    stopInterval();
}

function objectMove(event){
    newX=event.clientX;
    newY=event.clientY;

    let displacementX=newX-startX;
    let displacementY=newY-startY;


    Y=cardOffsetTop+displacementY;
    X=cardOffsetLeft+displacementX;
    
    card.style.top=Y+"px";
    card.style.left=X+"px";

}

function objectStop(event){
    
    document.removeEventListener('mousemove',objectMove)
    if(onCard===true){
        startInterval();
        onCard=false;
    }
    
}



document.addEventListener("keydown", function(event) {
    switch (event.key){
        case "w":
            velocityY+=-20;
            break;
        case "s":
            velocityY+=20;
            break;
        case "a":
            velocityX=-10;
            break;
        case "d":
            velocityX=10;
            break;
        
    }   // Displays the physical key code
});


startInterval();