import React, { useState } from 'react';

function CreateShortUrl() {
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
          setInput('');
        }}
      >
        Create Shorturl
      </button>
    </form>
  );
}

export default CreateShortUrl;
