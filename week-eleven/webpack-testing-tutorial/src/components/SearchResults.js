import React from "react";

export default function SearchResults({ articles = [] }) {
  return (
    <ul>
      {articles.map(({ webUrl, webTitle }) => (
        <li key={webUrl}>
          <a href={webUrl} target="_blank">
            {webTitle}
          </a>
        </li>
      ))}
    </ul>
  );
}
