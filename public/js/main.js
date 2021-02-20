window.onload = function (e) {
   const cards = document.querySelectorAll('.flip-card-inner');

   // [].forEach.call(cards, function (el) {
   //    el.style.transform = 'translateY(-200px)';
   // });

   const flipCard = document.querySelectorAll('.flip-card');

   function myFunction() {
      [].forEach.call(flipCard, function (el) {
         el.classList.add('active');
         el.style.transition = 'transform 2s';
      });
   }

   window.setTimeout(myFunction, 3000);
   // cards.forEach.call(this, function (el) {
   //
   // });
   //cardBack.style.transform = 'translateY(-200px)';
};
