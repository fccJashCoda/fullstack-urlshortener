import React from 'react';

function ShortUrl(props) {
  console.log(props);
  const { originalUrl, shortUrl } = props.payload;
  return (
    <li>
      <div>
        <a href={originalUrl}>{originalUrl}</a>
        <a href={shortUrl}>{shortUrl}</a>
        <button className="copy">Copy</button>
        <button className="delete">X</button>
      </div>
    </li>
  );
}

export default ShortUrl;
