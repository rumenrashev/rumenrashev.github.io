function clean(){
    if(!window.confirm(CLEAN_MESSAGE)){
        return;
    }
    localStorage.clear();
    renderScores();
    closeDropdown();
}