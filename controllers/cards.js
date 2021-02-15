const BlackCard = require('../models/blackcard');
const WhiteCard = require('../models/whitecard');

exports.getAddCard = (req, res, next) => {
   res.render('admin', { pageTitle: 'Add Card' });
};

exports.postAddCard = (req, res, next) => {
   const cardText = req.body.cardText;
   const type = req.body.card;

   if (type === 'black') {
      BlackCard.create({
         type: type,
         text: cardText,
      })
         .then((result) => {
            console.log('CARD ADDED!');
            res.redirect('./add-card');
         })
         .catch((err) => console.log(err));
   }
   if (type === 'white') {
      WhiteCard.create({
         type: type,
         text: cardText,
      })
         .then((result) => {
            console.log('CARD ADDED!');
            res.redirect('./add-card');
         })
         .catch((err) => console.log(err));
   }
};
