let startX=0,startY=0,newX=0,newY=0;
const card=document.getElementById("card");
let cardOffsetTop=card.offsetTop,cardOffsetLeft=card.offsetLeft;


card.addEventListener('mousedown',objectClick);

function objectClick(event){
    startX=event.clientX;
    startY=event.clientY;

    

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
    console.log(newX,newY);
    console.log(card.offsetTop)
}

function objectStop(event){
    cardOffsetLeft=card.offsetLeft;
    cardOffsetTop=card.offsetTop;
    document.removeEventListener('mousemove',objectMove)
    
}


// let startX=0,startY=0,newX=0,newY=0;
// const card=document.getElementById("card");
// let cardOffsetTop=card.offsetTop,cardOffsetLeft=card.offsetLeft;


// card.addEventListener('mousedown',objectClick);

// function objectClick(event){
//     startX=event.clientX;
//     startY=event.clientY;

    

//     document.addEventListener('mousemove',objectMove)
//     document.addEventListener('mouseup',objectStop)
// }

// function objectMove(event){
//     newX=event.clientX-startX;
//     newY=event.clientY-startY;

//     startX=event.clientX;
//     startY=event.clientY;

//     card.style.top=(card.offsetTop+newY)+'px';
//     card.style.left=(card.offsetLeft+newX)+'px';
// }

// function objectStop(event){
//     cardOffsetLeft=card.offsetLeft;
//     cardOffsetTop=card.offsetTop;
//     document.removeEventListener('mousemove',objectMove)
    
// }