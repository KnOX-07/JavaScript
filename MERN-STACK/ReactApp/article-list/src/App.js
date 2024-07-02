import React from 'react';
import ArticleList from './components/ArticleList';

const articles = [
  {
    title: "Understanding React",
    content: "React is a JavaScript library for building user interfaces...",
    author: {
      name: "John Doe",
      bio: "A passionate JavaScript developer.",
    },
  },
  {
    title: "Getting Started with Recoil",
    content: "Recoil is a state management library for JavaScript apps...",
    author: {
      name: "Jane Smith",
      bio: "A frontend developer and open source enthusiast.",
    },
  },
  {
    title: "Exploring the New Features of ES2021",
    content: "ES2021 introduced several new features including...",
    author: {
      name: "Alice Johnson",
      bio: "A software engineer with a love for new technologies.",
    },
  },
];

const App = () => {
  return (
    <div className="app">
      <h1 align="center">Article List</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default App