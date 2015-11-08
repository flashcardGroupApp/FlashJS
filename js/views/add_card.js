import React from 'react';
import Router from '../router';


export default React.createClass({

	cancelHandler(){
		this.props.onCancelClick();
	},

	addHandler(event){
		event.preventDefault();
		this.props.onAddClick();
	},

	updateQuestion(){
		let newQuestion = event.currentTarget.value;
		this.setState({
			question: newQuestion
		});
	},


	updateAnswer(){
		let newAnswer = event.currentTarget.value;
		this.setState({
			answer: newQuestion
	});

	},

	render: function() {
		return (
			<div className = "newcard">
				<form>
					<ol className = "cards">
						<li>
							<label htmlFor="lquestion">Question: </label>
		          <input type="text" className="question" id="question" placeholder="Question" />
		          <br></br>
		          <label htmlFor="lanswer">Answer: </label>
		          <input type="text" className="answer" id="answer" placeholder="Answer" />
						</li>
					</ol>
				</form>
				<div>
					<button className="hip" onClick={this.addHandler} type="submit" id="submit">ADD</button>
					<button className="hip" onClick={this.cancelHandler} type="cancel" id="cancel">Cancel</button>
				</div>
			</div>
		);
	}

});
