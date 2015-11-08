//delete and create deck 
//DONT FORGET TO FINISH THIS

import router from '../router';
import React from 'react';
import ReactDom from 'react-dom';
import DeckCollection from '../deck_collections';


export default React.createClass({


  DeckCollection () {
    console.log(data);
  },

  deckHandler(id) {
    this.props.onSpanClick(id);
    console.log("deck handler works");
  },

  logoutHandler() {
    this.props.onLogoutClick();
    console.log("logout works");
  },

//NEED TO FINISH
  deleteHandler(id) {
    this.props.onDeleteClick(id);
    console.log("delete handler works");
  },

//NEED TO FINISH
  addHandler(id) {
    this.props.onAddClick(id);
    console.log("Add Handler Works");
  },

  getDeck(deck) {
    return(
      <li className="deck-name">
        <span key={deck.id} className="single-deck-name" onClick={() => this.deckHandler(deck.id)}>{deck.title}</span>
        <button className="delete-deck" onClick={()=> this.deleteHandler(deck.id)}>X</button>
      </li>
    );
  },

  render(data) {
    return(
      <div className="dashboard">
        <h1 className="your-decks">Your Current Decks</h1>
        <button className="logout" onClick={()=> this.logoutHandler()}>Logout</button>
        <div className="decks">
          <ul className="decks-list">
            {this.props.data.map.getDeck}
            <li className="create-deck">
              <form className="new-deck-form">
                <input className="new-deck-name" placeholder="Create a New Deck"/>
              </form>
              <button className="new-deck-button" onClick={()=> this.addHandler(data.id)}>+</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

// export default dasboard;






//There is no button here