BACK_BTN.addEventListener(CLICK_EVENT,()=>{
    const arr = getItem('arr',[]);
    const index =  getItem('index',0);
    if(arr.length - index < 0){
        return;
    }
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
    closeDropdown();
});