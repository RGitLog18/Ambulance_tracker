import { useState, useEffect, useRef } from 'react';
import './SearchBar.css'; // We'll create this next

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const debounceTimer = useRef(null);

  // Debounce search input (300ms delay)
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (query.trim() !== '') {
      debounceTimer.current = setTimeout(() => {
        onSearch(query);
      }, 300);
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
    onSearch(''); // Optional: notify parent of clear
  };

  return (
    <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
      <div className="search-icon">
        <svg viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </div>
      
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search..."
        aria-label="Search"
      />
      
      {query && (
        <button className="clear-btn" onClick={handleClear} aria-label="Clear search">
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;