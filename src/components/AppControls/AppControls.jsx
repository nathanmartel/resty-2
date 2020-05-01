import React, { useState } from 'react';

const AppControls = () => {
  const [url, setUrl] = useState('');
  const [reqType, setReqType] = useState('');
  const [reqBody, setReqBody] = useState('');

  const handleSubmit = () => {
    console.log(`${reqType} | ${url} | ${reqBody} `);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>URL:
          <input type="text" value={url} onChange={() => setUrl(e => e.target.value)} />
        </label>
        <label>
          <input type="radio" id="reqType-get" name="reqType" value="GET" checked={reqType === 'GET'} onChange={() => setReqType(e => e.target.value)}/>
          GET
        </label>
        <label>
          <input type="radio" id="reqType-post" name="reqType" value="POST" checked={reqType === 'POST'} onChange={() => setReqType(e => e.target.value)} />
          POST
        </label>
        <label>Body:
          <input type="textarea" value={reqBody} onChange={() => setReqBody(e => e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AppControls;
