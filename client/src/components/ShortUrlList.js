import React, { useState, useEffect } from 'react';
import ShortUrl from './ShortUrl';

function ShortUrlList() {
  const [urlList, setUrlList] = useState([
    { originalUrl: 'hi', shortUrl: 'there' },
    { originalUrl: 'howare', shortUrl: 'you' },
  ]);

  return (
    <section>
      <ul>
        {urlList.map((url) => (
          <ShortUrl payload={url} key={url.short} />
        ))}
      </ul>
    </section>
  );
}

export default ShortUrlList;
