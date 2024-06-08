import React, { useState } from "react";
import BookCard from "./BookCard";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const removeFromBookshelf = (book) => {
    const updatedBookshelf = bookshelf.filter(
      (shelfBook) => shelfBook.key !== book.key
    );
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="p-4 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10 mb-10">
        <p className="text-3xl font-bold">My Bookshelf</p>
        <div className="ml-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 border border-green-500"
            onClick={() => (window.location.href = "/")}
          >
            Back to Search
          </button>
        </div>
      </div>
      {bookshelf.length === 0 ? (
        <p className="text-xl flex items-center justify-center">
          Your bookshelf is empty. Please add books to the shelf.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1  justify-center">
          {bookshelf.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onButtonClick={removeFromBookshelf}
              isInBookshelf={true}
              buttonLabel="Remove from Bookshelf"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookshelf;
