if(localStorage.getItem('arr') == null){
    const arr = {};
    arr.index = 0;
    arr.leftPoints = 0;
    arr.rightPoints = 0;
    arr.leftGames = 0;
    arr.rightGames = 0;
    arr.points = [];
    localStorage.setItem('arr',JSON.stringify(arr));
}

function getStorage(){
    return JSON.parse(localStorage.getItem('arr'));
}

function saveStorage(storage){
    localStorage.setItem('arr',JSON.stringify(storage));
}

// events
const CLICK_EVENT = 'click';
const KEYPRESS = 'keypress';
const ENTER_KEYBOARD = 'Enter';

// buttons
const MENU_BTN = document.getElementById('menu-btn');
const BACK_BTN = document.getElementById('back-btn');
const ENTER_BTN = document.getElementById('enter-btn');

//elements
const FOOTER = document.getElementById('footer');
const LEFT_INPUT = document.getElementById('leftInput');
const RIGHT_INPUT = document.getElementById('rightInput');

//states
const HIDDEN = 'hidden';
const CLOSED = 'closed';

//