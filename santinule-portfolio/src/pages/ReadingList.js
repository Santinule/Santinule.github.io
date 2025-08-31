import React from 'react';
import sapiensCover from '../assets/books/sapiens.jpg';
import howNotToBeWrongCover from '../assets/books/hownottobewrong.jpg';
import sssaw from '../assets/books/sssaw.jpg';
import TSDS from '../assets/books/TSDS.jpg';
import Random_walk from '../assets/books/Random_walk.jpg';
import zeroToOne from '../assets/books/zero_to_one.jpg';
import thecourageToBeDisliked from '../assets/books/the_courage_to_be_disliked.jpg';
import everythingIsFucked from '../assets/books/eif.jpg';



function ReadingList() {
  const books = [
    {
      title: "The Courage to Be Disliked",
      author: "Ichiro Kishimi and Fumitake Koga",
      category: "Psychology and Philosophy",
      description: "A dialogue between a discouraged young boy and a teaching philosopher. In it, he teaches what he understands about Adlerian psychology, using lucid and relatable analogies to illustrate the teleological framework that inspires Adlerian psychology. This one tops the list for its creativity and ease of portraying such a complex philosophy in such compelling prose.",
      coverImage: thecourageToBeDisliked
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "History",
      description: "This book is much more than a brief history of humankind. Harari does an excellent job extrapolating from physical evolution and natural selection into the metaphysical idea of story-guided evolution. It enlightens us with the ideal that culture, religion, and nations are superseded by powerful stories.",
      coverImage: sapiensCover
    },
    {
      title: "Several Short Sentences About Writing",
      author: "Verlyn Klinkenborg",
      category: "Writing",
      description: "Writing is probably one of the most important skills one can have. The misconception that as a writer you are constrained by syntax and grammar needs to be eradicated. Writing is simply a physical manifestation of an idea—you have them all the time—it may be elaborated and pruned later, or perhaps never: that is in your power. Read this right now, and then read it again.",
      coverImage: sssaw 
    },
    
    {
      title: "How Not to Be Wrong: The Power of Mathematical Thinking",
      author: "Jordan Ellenberg",
      category: "Mathematics",
      description: "Why thinking in a mathematical way is imperative for interpreting a seemingly uncomplex world.",
      coverImage: howNotToBeWrongCover
    },

    {
      title: "A Random Walk Down Wall street",
      author: "Burton G. Malkiel",
      category: "Finance",
      description: "Unlike most investment books that I have read, this one provided positive rather than normative statements: alluding to logic or statistics for investment advice. The book covers a wide range of topics and touches up on historical events that shaped our understanding of behavioral economics and society. The best guide providing a holistic view on investing.",
      coverImage: Random_walk
    },

    {
      title: "The Sun does Shine: How I Found Life and Freedom on Death Row",
      author: "Anthony Ray Hinton",
      category: "Memoir",
      description: "Life is simply not fair. Amid the inherent unfairness of life, it is still possible to find happiness and make a positive impact—no matter the circumstances. In this compelling memoir, Anthony Ray Hinton shares his remarkable story of how he discovered hope and joy while on death row. I have never supported the death penalty, as the false positive rate is simply too high—estimated at 10% when this book was written. I encourage everyone, whether they agree or disagree, to read this powerful story.",
      coverImage: TSDS
    },
    {
      title: "Zero to One: Notes on Startups, or How to Build the Future",
      author: "Peter Thiel",
      category: "Entrepreneurship",
      description: "We should aspire to make the future better and that is only possible if we generate ideals that shape a definitive future.  Optimism needs to be the first step. Then our ideals will flourish so long as we understand the indispensable requirements that make startups thrive. Thiel argues what these requirements are and why they are important. This book serves as a guide to building a startup.",
      coverImage: zeroToOne
    },
    {
      title: "Everything Is F*cked: A Book About Hope",
      author: "Mark Manson",
      category:"Self-Help",
      description: "I found this book particularly relevant to the struggles our society faces in the 21st century. Manson poses the problem of ‘lost hope’ by extrapolating from Nietzsche’s arguments on cultural evolution. He then turns to Kant’s ideas on rational moral frameworks as a possible guide to restoring hope. Finally, he posits a bridge between Kant’s ideals and modern psychology. Manson’s writing astonishes me as he makes rational arguments for modern problems, weaving in history and philosophy while balancing a contemporary and philosophical writing style. I would also recommend his blog.",
      coverImage: everythingIsFucked


    }
  ];

  return (
    <div className="content-container">
      <h1 className="main-heading">Reading List</h1>
      
      <div className="reading-introduction">
        <p className="bio-text">
          Reading is a special way of consuming stories, different from other content consumption methods, here: you direct the flow of the story. 
          You are able to pause, ponder—create new undefined connections that emerge uniquely through your personal interpretation.
        </p>
        <p className="bio-text">
          Throughout my life, reading has been a recurrent source of inspiration and joy— more than that, it has unimaginably transformed my worldview. 
          Losing myself in a book has provided a cloudless calm in my life.
        </p>
        <p className="bio-text">
          Below, I am sharing the stories that you should read, they have all positively influenced my life.
        </p>
      </div>
      
      <div className="reading-list">
        {books.map((book, index) => (
          <div key={index} className="project-item">
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div 
                style={{ 
                  width: "100px", 
                  height: "150px", 
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
                    e.target.src = "https://via.placeholder.com/100x150?text=No+Cover";
                  }}
                />
              </div>
              <div className="book-details">
                <h3 className="project-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                {book.category && <span style={{ 
                  display: "inline-block",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  marginBottom: "16px"
                }}>
                  {book.category}
                </span>}
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