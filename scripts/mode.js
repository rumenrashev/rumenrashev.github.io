const body = document.querySelector('body');
const modeBtn = document.getElementById('mode');

function mode(){
    if(!body.classList.contains('dark-body')){
        body.classList.add('dark-body');
        document.getElementById('mytable').querySelectorAll('tr').forEach(e=>e.classList.add('dark-row'));
        document.querySelectorAll('.left').forEach(e=> e.classList.add('dark-col'));
        document.querySelectorAll('footer').forEach(e=> e.classList.add('dark-footer'));
        document.querySelectorAll('header').forEach(e=> e.classList.add('dark-footer'));

    }else{
        body.classList.remove('dark-body');
        document.getElementById('mytable').querySelectorAll('tr').forEach(e=>e.classList.remove('dark-row'));
        document.querySelectorAll('.left').forEach(e=> e.classList.remove('dark-col'));
        document.querySelectorAll('footer').forEach(e=> e.classList.remove('dark-footer'));
        document.querySelectorAll('header').forEach(e=> e.classList.remove('dark-footer'));
    }
    let currentMode = modeBtn.textContent;
    if(currentMode == 'Тъмно'){
        modeBtn.textContent = "Светло";
    }
    else if(currentMode == 'Светло'){
        modeBtn.textContent = "Светло";
    }
    else if(currentMode == 'Light'){
        modeBtn.textContent = "Dark";
    }
    else if(currentMode == 'Dark'){
        modeBtn.textContent = "Light";
    }

}