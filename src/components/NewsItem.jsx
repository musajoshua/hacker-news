import React, { useState, useEffect } from "react";
import { showNewsItem } from "../api/Api";
import "../App.css";

function NewsItem({ newsId, no }) {
  const [newsItem, setNewsItem] = useState({});

  //   console.log(newsId);

  useEffect(() => {
    showNewsItem(newsId).then((data) => {
      setNewsItem(data);
      console.log(data);
    });
  }, [newsId]);

  const setTime = (d) => {
    let newTime = Date.now() - d * 1000;
    let hrs = Math.floor(newTime / (1000 * 60 * 60));
    return hrs;
  };

  const shortenUrl = (url) => {
    url && (url = url.substring(8, 23) + "...");
    return url;
  };

  const { title, by, id, url, time } = newsItem;

  return (
    <div className="news" key={id}>
      {no}
      <h1>{title}</h1>
      <p>By {by}</p>
      <p>{setTime(time)} hrs ago</p>
      <a href={url}>Full story ({shortenUrl(url)})</a>
    </div>
  );
}

export default NewsItem;
