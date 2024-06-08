import React from 'react';

const BookCard = ({ book, onButtonClick, isInBookshelf, buttonLabel }) => {
  const coverImageUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` 
    : 'https://via.placeholder.com/150';

  return (
    <div className="border rounded-md p-4 m-2 shadow-md sm:w-80 md:w-96 lg:w-72 xl:w-96">
      <img src={coverImageUrl} alt={book.title} className="h-40 w-full object-cover rounded-md" />
      <div className="mt-2 text-center">
        <h3 className="font-bold text-md">Book Title:</h3>
        <p className="text-sm mt-1">{book.title}</p>
      </div>
      <div className="mt-2 text-center">
        <h3 className="font-bold text-md">Edition Count:</h3>
        <p className="text-sm mt-1">{book.edition_count}</p>
      </div>
      {!isInBookshelf && buttonLabel === "Add to Bookshelf" && (
        <button 
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md w-full"
          onClick={() => onButtonClick(book)}
        >
          {buttonLabel}
        </button>
      )}
      {isInBookshelf && buttonLabel === "Remove from Bookshelf" && (
        <button 
          className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md w-full"
          onClick={() => onButtonClick(book)}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default BookCard;
