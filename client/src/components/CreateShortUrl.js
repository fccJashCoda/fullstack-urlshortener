import React, { useState } from 'react';

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
          props.action(input);
          setInput('');
        }}
      >
        Create Shorturl
      </button>
    </form>
  );
}

export default CreateShortUrl;
