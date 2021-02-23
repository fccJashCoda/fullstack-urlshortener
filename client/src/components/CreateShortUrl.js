import React, { useState } from 'react';

function CreateShortUrl(props) {
  const [input, setInput] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Shorten your link"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.action(input);
            setInput('');
          }}
          id="btn-shorten"
          className="btn btn-primary"
        >
          Shorten
        </button>
      </form>
      <p className="terms-and-services text-center">
        By clicking Shorten, you are agreeing to our{' '}
        <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>
      </p>
    </>
  );
}

export default CreateShortUrl;
