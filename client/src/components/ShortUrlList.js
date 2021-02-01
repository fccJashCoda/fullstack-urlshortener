import React from 'react';
import ShortUrl from './ShortUrl';
import ListCta from './ListCta';

function ShortUrlList(props) {
  const { urlList } = props;

  const renderList = [urlList[0], 'placeholder', ...urlList.slice(1)];
  console.log(renderList);

  return (
    <ul>
      {renderList.map((url, index) => {
        if (index === 1) {
          return <ListCta />;
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
