import React, { useState, useEffect } from 'react';

function CreateShortUrl(props) {
  const [input, setInput] = useState('');

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(input);
          props.action();
          setInput('');
        }}
      >
        Create Shorturl
      </button>
    </form>
  );
}

export default CreateShortUrl;
