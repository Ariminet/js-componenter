import React, { useState } from "react";
import "./Quotes.css";
import uuid from "uuid/v1";
import NewQuoteForm from "./NewQuoteForm";

const Quotes = () => {
  const [citater, setCitater] = useState([
    {
      title: "The Shuck",
      quote: "You are the shuckiest shuck faced shuck in the world!",
      author: "James  Dashner, The Maze Runner",
      id: 1
    },
    {
      title: "The Scum",
      quote: "Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!",
      author: "Rick Riordan, The Son of Neptune",
      id: 2
    },
    {
      title: "The Cameras",
      quote: "Insane means fewer cameras!",
      author: "Ally Carter, Only the Good Spy Young",
      id: 3
    }
  ]);
  const AddQuote = ({ title, quote, author }) => {
    setCitater([...citater, { title, quote, author, id: uuid() }]);
  };
  // deleteQuote = id => {
  //   let quotes = this.state.citater.filter(quote => {
  //     return quote.id !== id;
  //   });
  //   this.setState({
  //     citater: quotes
  //   });
  // };
  const deleteQuote = id => {
    let citaterDelete = citater.filter(citater => {
      return citater.id !== id;
    });
    setCitater({
      citater: citaterDelete
    });
    console.log(setCitater);
  };

  return (
    <div className="quote-list">
      {citater.map(quote => {
        return (
          <div className="quote" key={quote.id}>
            <h1>{quote.title} </h1>
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
            <button onClick={deleteQuote}>Delete Quote</button>
          </div>
        );
      })}
      <NewQuoteForm AddQuote={AddQuote} />
    </div>
  );
};

export default Quotes;
