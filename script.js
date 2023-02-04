document.addEventListener('click', documentClick);
function documentClick(e) {
   const targetItem = e.target;

   if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }
}

document.addEventListener('click', buttonClick);
function buttonClick(e) {
   const targetItem2 = e.target;
   if (targetItem2.closest('.button-sidebar')) {
      targetItem2.classList.toggle('_active-button');
   }
}


