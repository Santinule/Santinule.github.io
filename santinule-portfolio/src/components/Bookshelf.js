import React, { useRef, useEffect } from 'react';

const SPINE_WIDTH = 52;
const SHELF_HEIGHT = 276;
const COVER_WIDTH = SPINE_WIDTH * 4;

function Bookshelf({ books, selectedIndex, onSelect }) {
  const viewportRef = useRef(null);
  const bookRefs = useRef([]);

  useEffect(() => {
    if (selectedIndex === -1) return;
    const el = bookRefs.current[selectedIndex];
    const viewport = viewportRef.current;
    if (el && viewport) {
      // Scroll only the shelf's own horizontal viewport (never the page)
      // so opening a book can't move vertical scroll position.
      const target =
        el.offsetLeft - (viewport.clientWidth - el.offsetWidth) / 2;
      viewport.scrollTo({ left: target, behavior: 'smooth' });
    }
  }, [selectedIndex]);

  const scrollBy = (amount) => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bookshelf-wrapper">
      <button
        type="button"
        aria-label="Scroll shelf left"
        className="shelf-scroll-btn shelf-scroll-left"
        onClick={() => scrollBy(-240)}
      >
        &#8249;
      </button>

      <div className="bookshelf-viewport" ref={viewportRef}>
        {books.map((book, index) => {
          const isOpen = selectedIndex === index;
          return (
            <button
              key={book.title}
              type="button"
              ref={(el) => (bookRefs.current[index] = el)}
              className="shelf-book"
              style={{
                width: isOpen ? SPINE_WIDTH + COVER_WIDTH : SPINE_WIDTH,
                zIndex: isOpen ? 10 : 1,
              }}
              onClick={() => onSelect(index)}
              aria-pressed={isOpen}
              aria-label={`${isOpen ? 'Close' : 'Open'} ${book.title}`}
            >
              <span
                className="shelf-book-spine"
                style={{
                  width: SPINE_WIDTH,
                  height: SHELF_HEIGHT,
                  backgroundColor: book.spineColor,
                  color: book.textColor || '#ffffff',
                  transform: `rotateY(${isOpen ? -60 : 0}deg)`,
                }}
              >
                <span className="shelf-book-title">{book.title}</span>
              </span>
              <span
                className="shelf-book-cover"
                style={{
                  width: COVER_WIDTH,
                  height: SHELF_HEIGHT,
                  transform: `rotateY(${isOpen ? 30 : 88.5}deg)`,
                }}
              >
                <img
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/168x210?text=No+Cover';
                  }}
                />
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Scroll shelf right"
        className="shelf-scroll-btn shelf-scroll-right"
        onClick={() => scrollBy(240)}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Bookshelf;
