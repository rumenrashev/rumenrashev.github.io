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
const leftName = document.getElementById('leftName');
const rightName = document.getElementById('rightName');

const leftInput = document.getElementById('leftInput');
const rightInput = document.getElementById('rightInput');


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
            left.textContent = `${GAMES_NAME} : ${getItem('leftGames',0)}`;
            right.textContent = `${GAMES_NAME} : ${getItem('rightGames',0)}`;
            row.classList.add('text-red');
        }
        row.appendChild(left);
        row.appendChild(right);
        table.appendChild(row);
    }
    if(arr.length == 0){
        backBtn.style = 'display:none;'
    }else{
        backBtn.style = '';
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
renderScores();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  console.log(document.getElementById('mytable').querySelectorAll('tr'));
