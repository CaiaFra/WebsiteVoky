window.onload = function (e) {
   const flipCard = document.querySelectorAll('.flip-card');
   [].forEach.call(flipCard, function (el) {
      el.classList.add('active');
   });
};
