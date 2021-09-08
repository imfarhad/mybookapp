import { useState } from 'react';
import BookList from './BookList';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const App = () => {
  const initialBooks = [];
  const [books, setBooks] = useState(initialBooks);
  const onAddBook = () => {
    let book = document.getElementById("book").value;
    document.getElementById("book").value = "";
    setBooks([...books, book]);
  }
  const onDoubleClick = (id) => {
    books.splice(id, 1);
    setBooks([...books]);
  }

  return (
    <div className="App">
      <h1>Books Information</h1>
      <input type="text" id="book" />
      <input type="button" id="addBook" value="Add Book" onClick={onAddBook} />
      <BookList books={books} onBookItemClick={onDoubleClick} />
    </div>
  );
}

export default withAuthenticator(App);
