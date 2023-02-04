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


const allTypesWork = document.querySelectorAll('.repairs-sidebar__link');
document.addEventListener('click', linkClick);
function linkClick(e) {
   const targetItem3 = e.target;
   if (targetItem3.closest('.repairs-sidebar__link')) {
      for (let i = 0; i < allTypesWork.length; i++) {
         allTypesWork[i].classList.remove('done');
      }
      e.preventDefault();
      targetItem3.classList.toggle('done');

   }
}


