
function checkForWin(leftPoints,rightPoints,storage){
    if((leftPoints > 150 && leftPoints > rightPoints) || (rightPoints > 150 && rightPoints > leftPoints)){
        if(window.confirm('Беше последната игра капо?')){
            return;
        }
        if(leftPoints > rightPoints){
            storage.leftGames += 1;
        }else{
            storage.rightGames += 1;
        }
        storage.points.push(storage.leftGames + "-" + storage.rightGames);
        storage.leftPoints = 0;
        storage.rightPoints = 0;
    }
}


function enterScore(){
    if( !LEFT_INPUT.checkValidity() || !RIGHT_INPUT.checkValidity()){
        return;
    }
    const leftInput = Number(LEFT_INPUT.value);
    const rightInput = Number(RIGHT_INPUT.value);
    game.leftPoints += leftInput;
    game.rightPoints += rightInput;
    game.addPoints(leftInput,rightInput);
    render();
    window.scrollTo(0, MAIN_CONTENT.offsetHeight);
};

ENTER_BTN.addEventListener(CLICK_EVENT,() =>{
    enterScore();
});

input.addEventListener(KEYPRESS, (event)=> {
    if (event.key === ENTER_KEYBOARD) {
      event.preventDefault();
      enterScore();
    }
}); 
