// add and delete cards
//view cards


// After you click a card from the dashboard, cardView is rendered. Same idea as dashboard, except with cards.
//Add card option will be a button in the shape of a card in the beginning of card marked with a '+'. It will render a pop-up input form (not a chrome alert).
// After form is submitted, new card with the submitted information will be popped into the array of cards and rendered at the beginning of the card.
//Delete option: click card. Card will be grayed out, and an undo button will be rendered in corner. Button to delete selected cards will be at bottom of the page. 


import React from 'react';
import ReactDom from 'react-dom';
import CardCollection from './card_collections';


let deck = React.createClass({

  cardHandler(id) {
    this.props.onSpanClick(id);
  },

//NEED TO FINISH
  deleteHandler(id) {
    this.props.onDeleteClick(id);
  },

//NEED TO FINISH
  addHandler(id) {
    this.props.onAddClick(id);
  },

  getCard(card) {
    return(
      <li className="card-name">
        <span key={card.id} className="single-card-name" onClick={() => this.cardHandler(card.id)}>{card.title}</span>
        <button className="delete-card" onClick={()=> this.deleteHandler(card.id)}>X</button>
      </li>
    );
  },

  render(data) {
    return(
      <div className="dashboard">
        <h1 className="your-cards">Your Current Cards</h1>
        <div className="cards">
          <ul className="cards-list">
            {this.props.data.map.getCard}
            <li className="create-card">
              <form className="new-card-form">
                <input className="new-card-name" placeholder="Create a New card">
              </form>
              <button className="new-card-button" onClick={()=> this.addHandler(data.id)}>+</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default CardsView;






//There is no button here