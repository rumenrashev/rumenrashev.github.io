function Game(leftName,rightName){
    this.leftName = leftName;
    this.rightName = rightName;
    this.records = [];
    this.leftPoints = 0;
    this.rightPoints = 0;
    this.leftGames = 0;
    this.rightGames = 0;
    this.foward = [];
}

Game.prototype.addPoints = function (leftInput, rightInput){
    this.leftPoints += leftInput;
    this.rightPoints += rightInput;
    this.records.push(leftInput + '-' + rightInput);
}

Game.prototype.back = function () {
    this.foward.push(this.records.pop());
}

const game = new Game('Ние','Вие');


function render(){
    for (const [key, value] of Object.entries(game)) {
        const parent = document.getElementById(key);
        if(key == 'records'){
                parent.innerHTML = value.join('<br>');
            }
        else {
            parent.textContent = value;
        }
    }
}

function validateInput(){

}
