import React from 'react';
import ShortUrl from './ShortUrl';

function ShortUrlList(props) {
  const { urlList } = props;

  return (
    <section>
      <ul>
        {urlList.map((url) => (
          <li key={url._id}>
            <ShortUrl payload={url} delete={props.delete} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShortUrlList;
