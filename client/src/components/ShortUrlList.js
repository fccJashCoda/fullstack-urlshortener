import React from 'react';
import ShortUrl from './ShortUrl';

function ShortUrlList(props) {
  const { urlList } = props;

  return (
    <section>
      <ul>
        {urlList.map((url) => (
          <li key={url._id}>
            <ShortUrl payload={url} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShortUrlList;
