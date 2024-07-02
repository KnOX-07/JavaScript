import React from 'react';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <div key={index} className="article">
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <div className="author-details">
                        <h4>Author: {article.author.name}</h4>
                        <p>{article.author.bio}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;