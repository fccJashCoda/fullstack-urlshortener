import React, { useEffect } from 'react';

function ShortUrl(props) {
  const { _id, originalUrl, shortUrl } = props.payload;

  const shortUrlLink = `${shortUrl}`;

  const copyLink = (e) => {
    console.log(e.target.parentNode);
    navigator.clipboard.writeText(shortUrlLink);
  };

  useEffect(() => {
    console.log(`mounting ${shortUrl}`);

    return () => console.log(`unmounting ${shortUrl}`);
  }, []);

  return (
    <div className="short">
      <a href={originalUrl}>{originalUrl}</a>
      <div>
        <a href={shortUrl} className="short-link">
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
