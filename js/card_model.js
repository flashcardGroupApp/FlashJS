//Question
//Answer
//Deck ID

import Backbone from 'backbone';

const CardModel = Backbone.Model.extend({

  url: 'http://secret-shore-7735.herokuapp.com/decks/' 
  // idAttribute: ,

});

export default CardModel;