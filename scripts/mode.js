const body = document.querySelector('body');
const modeBtn = document.getElementById('mode');

function mode(){
    if(!body.classList.contains('dark-body')){
        body.classList.add('dark-body');
        document.getElementById('mytable').querySelectorAll('tr').forEach(e=>e.classList.add('dark-row'));
        document.querySelectorAll('.left').forEach(e=> e.classList.add('dark-col'));
        document.querySelectorAll('footer').forEach(e=> e.classList.add('dark-footer'));
        document.querySelectorAll('header').forEach(e=> e.classList.add('dark-footer'));
        document.querySelectorAll('li').forEach(e=> e.classList.add('dark-item'));
        document.querySelectorAll('input').forEach(e=> e.classList.add('dark-item'));
        document.querySelectorAll('button').forEach(e=> e.classList.add('dark-item'));

    }else{
        body.classList.remove('dark-body');
        document.getElementById('mytable').querySelectorAll('tr').forEach(e=>e.classList.remove('dark-row'));
        document.querySelectorAll('.left').forEach(e=> e.classList.remove('dark-col'));
        document.querySelectorAll('footer').forEach(e=> e.classList.remove('dark-footer'));
        document.querySelectorAll('header').forEach(e=> e.classList.remove('dark-footer'));
        document.querySelectorAll('li').forEach(e=> e.classList.remove('dark-item'));
        document.querySelectorAll('input').forEach(e=> e.classList.remove('dark-item'));
        document.querySelectorAll('button').forEach(e=> e.classList.remove('dark-item'));
    }
    document.querySelector(".drop-down").classList.add("closed");
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