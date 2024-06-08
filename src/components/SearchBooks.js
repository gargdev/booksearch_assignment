import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  useEffect(() => {
    if (query) {
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          setBooks(data.docs);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const isBookInBookshelf = (book) => {
    return bookshelf.some(shelfBook => shelfBook.key === book.key);
  };

  return (
    <div className="p-4 text-center">
      <p className="text-3xl font-bold">Search by book name:</p>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-2 gap-5 sm:ml-20">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by book name"
          className="border p-2 rounded-md text-center mb-2 sm:mb-0 sm:mr-2 w-full sm:w-1/2"
        />
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-md  sm:w-auto"
          onClick={() => window.location.href = '/bookshelf'}
        >
          My Bookshelf
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
        {books.map(book => (
          <BookCard 
            key={book.key} 
            book={book} 
            onButtonClick={addToBookshelf} 
            isInBookshelf={isBookInBookshelf(book)} 
            buttonLabel="Add to Bookshelf"
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
