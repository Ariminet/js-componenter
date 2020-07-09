import React, { useState } from "react";

const NewQuoteForm = ({ AddQuote }) => {
  const [title, setTitle] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    AddQuote({ title, quote, author });
    setTitle("");
    setQuote("");
    setAuthor("");
    console.log(setQuote);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="quote">Quote:</label>
        <input
          type="text"
          id="quote"
          value={quote}
          onChange={e => setQuote(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <input type="submit" value="add quote" />
      </form>
    </div>
  );
};

export default NewQuoteForm;

// class AddQuote extends Component {

//   handleChange = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addQuote(this.state);
//   };

//   render() {
//     return (
//       <div className="form-container">
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" onChange={this.handleChange} />
//           <label htmlFor="quote">Quote:</label>
//           <input type="text" id="quote" onChange={this.handleChange} />
//           <label htmlFor="author">Author:</label>
//           <input type="text" id="author" onChange={this.handleChange} />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddQuote;
