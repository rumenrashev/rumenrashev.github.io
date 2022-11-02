const MAIN_CONTENT = document.getElementById("main-content");
const enterBtn = document.getElementById('enter');
const clearBtn = document.getElementById('clean');
const fowardBtn = document.getElementById('foward');
const leftPoints = document.getElementById('leftPoints');
const rightPoints = document.getElementById('rightPoints');
const leftGames = document.getElementById('leftGames');
const rightGames = document.getElementById('rightGames');
const main = document.getElementById('main');
const leftContainer = document.getElementById('left');
const rightContainer = document.getElementById('right');
const leftName = document.getElementById('leftName');
const rightName = document.getElementById('rightName');

const leftInput = document.getElementById('leftInput');
const rightInput = document.getElementById('rightInput');




function renderScores(){
    test.addPoints();
    test.hasWinner();
    console.log(test);
    const storage = getStorage();
    let arr = storage.points;
    let index = storage.index;
    MAIN_CONTENT.innerHTML = '';
    for(let i = 0; i < arr.length - index; i+=2){
        let row = document.createElement('tr');
        let left = document.createElement('td');
        left.classList.add('left');
        let right = document.createElement('td');
        if(!((arr[i] + '').includes('-'))){
            left.textContent = arr[i];
            right.textContent = arr[i + 1];
        }else{
            left.textContent = `${GAMES_NAME} : ${getItem('leftGames',0)}`;
            right.textContent = `${GAMES_NAME} : ${getItem('rightGames',0)}`;
            row.classList.add('text-red');
        }
        row.appendChild(left);
        row.appendChild(right);
        MAIN_CONTENT.appendChild(row);
    }
    if(arr.length - index <= 0){
        BACK_BTN.style = 'display:none;'
    }else{
        BACK_BTN.style = '';
    }
    if(index == 0){
        fowardBtn.style = 'display:none;'
    }else{
        fowardBtn.style = '';
    }
    leftPoints.textContent = `${GAMES_NAME} : ${getItem('leftGames',0)}`;
    rightPoints.textContent = `${GAMES_NAME} : ${getItem('rightGames',0)}`;
    leftGames.textContent = `${POINTS_NAME} : ${getItem('leftPoints',0)}`;
    rightGames.textContent = `${POINTS_NAME} : ${getItem('rightPoints',0)}`;
    leftName.textContent = we;
    rightName.textContent = you;
    leftInput.placeholder = INPUT_PLACEHOLDER;
    rightInput.placeholder = INPUT_PLACEHOLDER;
    document.querySelector(".drop-down").classList.add("closed");
    window.scrollTo(0, MAIN_CONTENT.offsetHeight);
}

function getInput(id){
    let value = Number(document.getElementById(id).value);
    if(value < 0){
        throw 'Score can`t be negative';
    }
    return value;
}


// renderScores();

