import React from 'react';
import ShortUrl from './ShortUrl';
import ListCta from './ListCta';

function ShortUrlList(props) {
  const { urlList } = props;

  const renderList = [urlList[0], 'placeholder', ...urlList.slice(1)];

  return (
    <ul>
      {renderList.map((url, index) => {
        if (index === 1) {
          return <ListCta key={index} />;
        }
        return (
          <li key={url._id}>
            <ShortUrl payload={url} delete={props.delete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ShortUrlList;
