function foward(){
    let index = getItem('index',0);
    let arr = getItem('arr',[]);
    if(index == 0){
        return;
    }
    console.log(index);
    console.log(arr.length);
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
}