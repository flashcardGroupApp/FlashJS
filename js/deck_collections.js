import Backbone from 'backbone';
import DeckModel from './deck_model';

const DeckCollection = Backbone.Collection.extend({

  url:'http://secret-shore-7735.herokuapp.com/decks/' ,
  model: DeckModel,
  function (data) {
    return data.results;
  }

});

export default DeckCollection;