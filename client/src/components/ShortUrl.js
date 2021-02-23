import React from 'react';

function ShortUrl(props) {
  const { _id, originalUrl, shortUrl } = props.payload;

  const shortUrlLink = `http://localhost:5000/${shortUrl}`;

  const copyLink = (e) => {
    navigator.clipboard.writeText(shortUrlLink);
  };

  return (
    <div className="short">
      <a href={originalUrl}>{originalUrl}</a>
      <div>
        <a href={shortUrlLink} className="short-link">
          {shortUrl}
        </a>
        <button className="btn btn-tertiary" onClick={(e) => copyLink(e)}>
          Copy
        </button>
        <button onClick={() => props.delete(_id)} className="debug">
          dev:delete
        </button>
      </div>
    </div>
  );
}

export default ShortUrl;
