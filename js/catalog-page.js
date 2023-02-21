// скролл тз меню, кнопок до якоря/одноименного класса на странице 
const catalogAnchors = document.querySelectorAll('[data-goto]');
const catalogTimeout = 1000;

if (catalogAnchors.length > 0) {
   catalogAnchors.forEach(anchor => {
      anchor.addEventListener("click", onCatalogAnchorClick);
   });

   function onCatalogAnchorClick(e) {
      // получаем объект-ссылку, где был клик
      const anchor = e.target;
      // проверяем заполнен ли атрибут и существует ли данный объект
      if (anchor.dataset.goto && document.querySelector(anchor.dataset.goto)) {

         const gotoBlock = document.querySelector(anchor.dataset.goto);
         // учитываем высоту шапки
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.catalog__head').offsetHeight + 50;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
         });
         e.preventDefault();
      }
   }
}