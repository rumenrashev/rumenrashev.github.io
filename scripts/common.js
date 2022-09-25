function getItem(itemName,initialValue){
    if(localStorage.getItem(itemName) == null){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
    }
    return JSON.parse(localStorage.getItem(itemName));
}

function saveItem(itemName,item){
    localStorage.setItem(itemName,JSON.stringify(item));
}

let lang = getItem('lang',"bg");

const GAME_NAME_BG = "Игри";
const GAME_NAME_EN = "Games";

const CLEAN_MESSAGE_BG = "Всички записи ще бъдат изтрити.Желаете ли да продължите?";
const CLEAN_MESSAGE_EN = "All recordings will cleared. Are you sure ?";

const INPUT_PLACEHOLDER_BG = "Въведи резултат...";
const INPUT_PLACEHOLDER_EN = "Enter score...";

const DARK_BTN_NAME_BG = "Тъмно";
const DARK_BTN_NAME_EN = "Dark";

let GAMES_NAME = GAME_NAME_BG;
let POINTS_NAME;
let we;
let you;
let CLEAN_MESSAGE;
let INPUT_PLACEHOLDER;
let DARK_BTN_NAME;


function changeLang(lang){
    if(lang == "Български"){
        GAMES_NAME = GAME_NAME_BG;
        POINTS_NAME = "Точки";
        we = "Ние";
        you = "Вие";
        CLEAN_MESSAGE = CLEAN_MESSAGE_BG;
        INPUT_PLACEHOLDER = INPUT_PLACEHOLDER_BG;
    }else{
        GAMES_NAME = GAME_NAME_EN;
        POINTS_NAME = "Points";
        we = "Us";
        you = "Them"
        CLEAN_MESSAGE = CLEAN_MESSAGE_EN;
        INPUT_PLACEHOLDER = INPUT_PLACEHOLDER_EN;
    }
}

changeLang();

