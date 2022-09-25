const langBtn = document.getElementById('lang');

langBtn.addEventListener('click',()=>{
    const currentLang = langBtn.textContent;
    langBtn.textContent = currentLang == 'English' ? 'Български' : 'English';
    changeLang(currentLang);
    renderScores();
});