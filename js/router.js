import Backbone from 'backbone';
import Cookies from 'js-cookie';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import LoginTemplate from './views/login';
import DashboardTemplate from './views/dashboard';
import DeckCollection from './deck_collections';
import AddCard from './views/add_card';

export default Backbone.Router.extend({

	routes: {


		''        : 'homeView',
		'login'		: 'login',
		'logout'  : 'logout',
		'dashboard' : 'dashboard',
    'AddCard' : 'AddCard'

	},

initialize: function(appElement) {
  this.el = appElement;
  this.board = new DeckCollection();
},

	start(){
		Backbone.history.start();
	},

// $('.app').html('loading...');

//     request.then((data) => {

//       console.log('data:', data);

//       Cookies.set('username', data);

//       $.ajaxSetup({
//         headers: {
//           auth_token: data.auth_token
//         }
//       });
//       this.redirect('dashboard');
//     }).fail(() => {
//       $('.app').html(' Wrong email or password. Please, try again.');
//     });

	redirect(route) {
		this.navigate(route, {
			trigger: true,
			replace: true
		});
	},

	login(){
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;

		//call the server to log user in
    let request = $.ajax({
      url: 'http://secret-shore-7735.herokuapp.com/login',
      method: 'POST',
      data: {
          username: username,
          password: password, 
      }
    });

    $('.app').html('loading...');

    request.then((data) => {

      console.log('data:', data);

      Cookies.set('username', data);

      $.ajaxSetup({
        headers: {
          auth_token: data.auth_token
        }
      });
      this.redirect('dashboard');
    }).fail(() => {
      $('.app').html(' Wrong email or password. Please, try again.');
    });
   },


	logout(){
		Cookies.remove('username');
    $.ajaxSetup({
      headers: {
        auth_token: null
      }
    });
    this.redirect('');
	},

  setHeader(){
    let user = Cookies.get('username');
    console.log(user);
    if (user) {
      let auth = JSON.parse(user).user.auth_token;
      console.log(auth);
      $.ajaxSetup({
        headers: {
         'Access-Token': auth
        }
      });
    }
  },

	homeView(){
		ReactDom.render(
			<LoginTemplate
				onLoginClick={() => this.login()}/>,
		document.querySelector('.app')
			);
	},
  dashboard(){
    this.setHeader();
    this.board.fetch().then(() => {
      // this.render(
        <DashboardTemplate
        data={this.board.toJSON()}/>,
      document.querySelector('.app')
        // );
    });

  }
});


