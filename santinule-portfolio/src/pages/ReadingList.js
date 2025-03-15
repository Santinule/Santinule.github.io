import React from 'react';

function ReadingList() {
  const books = [
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "History",
      description: "A brief history of humankind",
      coverImage: "https://m.media-amazon.com/images/I/713jIoMO3UL._SL1500_.jpg",
      link: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095"
    },
    {
      title: "How Not to Be Wrong: The Power of Mathematical Thinking",
      author: "Jordan Ellenberg",
      category: "Mathematics",
      description: "Why thinking in a mathematical way is imperative for interpreting a seemingly uncomplex world.",
      coverImage: "/api/placeholder/80/120?text=How+Not+To+Be+Wrong",
      link: "https://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535"
    }
  ];

  return (
    <div className="content-container">
      <h1 className="main-heading">Reading List</h1>
      <p className="bio-text">Books that have influenced my thinking:</p>
      
      <div className="reading-list">
        {books.map((book, index) => (
          <div key={index} className="project-item">
            <div style={{ display: "flex", gap: "20px" }}>
              <a 
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  width: "80px", 
                  height: "120px", 
                  flexShrink: 0, 
                  borderRadius: "8px", 
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  display: "block"
                }}
              >
                <img 
                  src={book.coverImage} 
                  alt={`Cover of ${book.title}`} 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/80x120?text=No+Cover";
                  }}
                />
              </a>
              <div>
                <h3 className="project-title">
                  <a 
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      borderBottom: "1px dotted currentColor"
                    }}
                  >
                    {book.title}
                  </a>
                </h3>
                <p style={{ fontStyle: "italic", marginBottom: "8px" }}>by {book.author}</p>
                <span style={{ 
                  display: "inline-block",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  marginBottom: "16px"
                }}>
                  {book.category}
                </span>
                <p className="project-description">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadingList;