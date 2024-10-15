import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Book Sharing App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/add-book" className="hover:underline">
                Add Book
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
