const BlackCard = require('../models/blackcard');
const WhiteCard = require('../models/whitecard');

async function findCards() {
   const blackCard = await BlackCard.findAll().then((cards) => {
      let random;
      do {
         random = Math.floor(Math.random() * (cards.length + 1));
      } while (random === 0);
      return random;
   });

   const blackText = await BlackCard.findByPk(blackCard).then((c) => c.text);

   const whiteCard = await WhiteCard.findAll().then((cards) => {
      let random;
      do {
         random = Math.floor(Math.random() * (cards.length + 1));
      } while (random === 0);
      return random;
   });

   const whiteText = await WhiteCard.findByPk(whiteCard).then((c) => c.text);

   const resultArray = [blackText, whiteText];

   return resultArray;
}

exports.getMainPage = async (req, res, next) => {
   const array = await findCards();
   res.render('index', {
      pageTitle: 'Cards Against Humanity',
      blackText: array[0],
      whiteText: array[1],
   });
};
