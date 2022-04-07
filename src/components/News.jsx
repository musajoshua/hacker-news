import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { showNews } from "../api/Api";
import "../App.css";

function News() {
  const [storyIds, setStoryIds] = useState([]);
  const [loaded, setLoaded] = useState([0, 20]);

  useEffect(() => {
    showNews().then((ids) => setStoryIds(ids));
  }, []);
  //   console.log(storyIds);

  let no = loaded[0];

  const loadMore = () => {
    setLoaded(loaded.map((item) => item + 20));
    console.log(loaded);
  };

  return (
    <>
      <header className="header">
        <h1>HACKER NEWS</h1>
      </header>
      {storyIds.slice(loaded[0], loaded[1]).map((storyId, i) => (
        <NewsItem key={i} newsId={storyId} no={(no += 1)} />
      ))}
      <button onClick={loadMore} className="btn">
        More
      </button>
    </>
  );
}

export default News;
