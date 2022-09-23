const table = document.getElementById("mytable");
const enterBtn = document.getElementById('enter');
const clearBtn = document.getElementById('clean');
const backBtn = document.getElementById('back');
const fowardBtn = document.getElementById('foward');
const leftPoints = document.getElementById('leftPoints');
const rightPoints = document.getElementById('rightPoints');
const leftGames = document.getElementById('leftGames');
const rightGames = document.getElementById('rightGames');
const main = document.getElementById('main');
const leftContainer = document.getElementById('left');
const rightContainer = document.getElementById('right');


function getItem(itemName,initialValue){
    if(localStorage.getItem(itemName) == null){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
    }
    return JSON.parse(localStorage.getItem(itemName));
}

function saveItem(itemName,item){
    localStorage.setItem(itemName,JSON.stringify(item));
}

function checkForWin(leftPoints,rightPoints){
    if((leftPoints > 150 && leftPoints > rightPoints) || (rightPoints > 150 && rightPoints > leftPoints)){
        if(window.confirm('Беше последната игра капо?')){
            return;
        }
        let arr = getItem('arr',[]);
        let leftGames = Number(getItem('leftGames',0));
        let rightGames = Number(getItem('rightGames',0));
        if(leftPoints > rightPoints){
            leftGames += 1;
        }else{
            rightGames += 1;
        }
        arr.push(leftGames + "-" + rightGames);
        arr.push(leftPoints +  "-" + rightPoints);
        saveItem('arr',arr);
        saveItem('leftPoints',0);
        saveItem('rightPoints',0);
        saveItem('leftGames',leftGames);
        saveItem('rightGames',rightGames);

    }
}


function renderScores(){
    let arr = getItem('arr',[]);
    let index = getItem('index',0);
    table.innerHTML = '';
    for(let i = 0; i < arr.length - index; i+=2){
        let row = document.createElement('tr');
        let left = document.createElement('td');
        left.classList.add('left');
        let right = document.createElement('td');
        if(!((arr[i] + '').includes('-'))){
            left.textContent = arr[i];
            right.textContent = arr[i + 1];
        }else{
            let [leftGames, rightGames] = arr[i].split('-');
            left.textContent = "Games : " + leftGames; 
            right.textContent = "Games : " + rightGames;
        }
        row.appendChild(left);
        row.appendChild(right);
        table.appendChild(row);
    }
    enterBtn.disabled = getInput('leftInput') === 0 && getInput('rightInput').textContent === 0;
    backBtn.disabled = arr.length - index -2 < 0;
    clearBtn.disabled = arr.length == 0;
    fowardBtn.disabled = index == 0;
    leftPoints.textContent = 'Игри : ' + getItem('leftPoints',0);
    rightPoints.textContent = 'Игри : ' + getItem('rightPoints',0);
    leftGames.textContent = "Точки : " + getItem('leftGames',0);
    rightGames.textContent = "Точки : " + getItem('rightGames',0);
    window.scrollTo(0, table.offsetHeight);
}

function getInput(id){
    let value = Number(document.getElementById(id).value);
    if(value < 0){
        throw 'Score can`t be negative';
    }
    return value;
}

function clearInputs(){
    document.getElementById('leftInput').value = '';
    document.getElementById('rightInput').value = '';
}

enterBtn.addEventListener('click',() =>{
    try{
        let index = getItem('index',0);
        let arr = getItem('arr',[]);
        arr.splice(arr.length - index,index);
        console.log(arr);
        saveItem('arr',arr);
        saveItem('index',0);
        let leftInput = getInput('leftInput');
        let rightInput = getInput('rightInput');
        // if(leftInput + rightInput < 16){
        //     throw 'Minumum score for both teams is 16';
        // }
        arr.push(leftInput);
        arr.push(rightInput);
        saveItem('arr',arr);
        clearInputs();
        leftInput += Number(getItem('leftPoints',0));
        rightInput += Number(getItem('rightPoints',0));
        saveItem('leftPoints',leftInput);
        saveItem('rightPoints',rightInput);
        renderScores();
        checkForWin(leftInput,rightInput);
        renderScores();
    }catch(e){
        alert(e);
    }

})

clearBtn.addEventListener('click',()=>{
    if(!window.confirm('All recordings will cleared. Are you sure ?')){
        return;
    }
    localStorage.clear();
    renderScores();
});

backBtn.addEventListener('click',()=>{
    let index = getItem('index',0);
    let arr = getItem('arr',[]);
    let leftPoints;
    let rightPoints;
    if(!((arr[arr.length - index - 1] + '').includes('-'))){
        leftPoints = Number(getItem('leftPoints',0)) - Number(arr[arr.length - index -2]);
        rightPoints = Number(getItem('rightPoints',0)) - Number(arr[arr.length - index -1]);

    }else{
        let points = arr[arr.length - index - 1].split('-');
        leftPoints = Number(points[0]);
        rightPoints = Number(points[1]);
        let leftGames = getItem('leftGames',0);
        let rightGames = getItem('rightGames',0);
        if(leftPoints > rightPoints){
            leftGames--;
        }else{
            rightGames--;
        }
        saveItem('leftGames',leftGames);
        saveItem('rightGames',rightGames);
    }
    saveItem('leftPoints',leftPoints);
    saveItem('rightPoints',rightPoints);
    saveItem('index', Number(index) + 2);
    renderScores();

});

fowardBtn.addEventListener('click',()=>{
    let index = getItem('index',0);
    let arr = getItem('arr',[]);
    let leftPoints;
    let rightPoints;
    if(!((arr[arr.length - index] + '').includes('-'))){
        leftPoints = Number(getItem('leftPoints',0)) + Number(arr[arr.length - index]);
        rightPoints = Number(getItem('rightPoints',0)) + Number(arr[arr.length - index + 1]);

    }else{
        let points = arr[arr.length - index + 1].split('-');
        leftPoints = Number(points[0]);
        rightPoints = Number(points[1]);
        let leftGames = getItem('leftGames',0);
        let rightGames = getItem('rightGames',0);
        if(leftPoints > rightPoints){
            leftGames++;
        }else{
            rightGames++;
        }
        saveItem('leftGames',leftGames);
        saveItem('rightGames',rightGames);
    }
    saveItem('leftPoints',leftPoints);
    saveItem('rightPoints',rightPoints);
    saveItem('index', Number(index) - 2);
    renderScores();
});

renderScores();



