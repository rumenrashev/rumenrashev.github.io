function closeDropdown(){
  MENU_BTN.parentNode.parentNode.classList.toggle(CLOSED);
  MAIN_CONTENT.classList.toggle(HIDDEN);
  FOOTER.classList.toggle(HIDDEN);
}

MENU_BTN.addEventListener(CLICK_EVENT,()=>{
    closeDropdown();
});
