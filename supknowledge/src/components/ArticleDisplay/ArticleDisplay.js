import React from 'react';
import './ArticleDisplay.css';

function ArticleDisplay({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <div className="article-display">
        <p>No articles found.</p>
      </div>
    );
  }

  return (
    <div className="article-display">
      {articles.map((article) => (
        <div className="article" key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <p>By {article.author} on {article.publishedDate}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}

export default ArticleDisplay;