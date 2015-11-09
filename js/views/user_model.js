import Backbone from 'backbone';

let userModel = Backbone.Model.extend({
	urlRoot: 'http://secret-shore-7735.herokuapp.com/',
	// idAttribute: 'objectId'

});

export default userModel;