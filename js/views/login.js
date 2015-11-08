import React from 'react';
import Cookies from 'js-cookie';

export default React.createClass({


	// getInitialState: function() {
 //    return {username: "", password: ""}
 //  },

	submitHandler(e) {
		e.preventDefault();
		this.props.onLoginClick()
	},

	handleChange: function(event) {
    if (event.target.type === "password") {
      this.setState({password: event.target.value})
    } else if (event.target.type === "text") {
      this.setState({username: event.target.value})
    }
  },


	render: function() {

		return (
				<div className="login jumbotron center-block">
        	<h1>Login</h1>
	        <form role="form">
		        <div className="form-group">
		          <label htmlFor="username">Username: </label>
		          <input type="text" className="username" id="username" placeholder="Username" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="password">Password:  </label>
		          <input type="password" className="password" id="password" ref="password" placeholder="Password" />
		        </div>
	        <button type="submit" onClick={this.submitHandler}className="btn btn-default">Login</button>
	      </form>
    	</div>

    );
	}

});











