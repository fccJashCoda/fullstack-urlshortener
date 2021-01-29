import React from 'react';

function ShortUrl(props) {
  const { originalUrl, shortUrl } = props.payload;
  return (
    <div>
      <a href={originalUrl}>{originalUrl}</a>
      <a href={shortUrl}>{shortUrl}</a>
      <button className="copy">Copy</button>
      <button className="delete">X</button>
    </div>
  );
}

export default ShortUrl;
