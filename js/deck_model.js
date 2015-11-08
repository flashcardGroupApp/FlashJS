//User ID
//Title

import Backbone from 'backbone';

const DeckModel = Backbone.Model.extend({

	  urlRoot: 'http://secret-shore-7735.herokuapp.com/decks/:id'
	  // idAttribute: ,

});

export default DeckModel;