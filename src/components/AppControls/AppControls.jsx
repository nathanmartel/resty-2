import React, { useState } from 'react';

const AppControls = () => {
  const [url, setUrl] = useState('');
  const [reqType, setReqType] = useState('GET');
  const [reqBody, setReqBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${reqType} | ${url} | ${reqBody} `);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <br />

        <label>
          <input type="radio" id="reqType-get" name="reqType" value="GET" checked={reqType === 'GET'} onChange={(e) => setReqType(e.target.value)}/>
          GET
        </label>
        <label>
          <input type="radio" id="reqType-post" name="reqType" value="POST" checked={reqType === 'POST'} onChange={(e) => setReqType(e.target.value)} />
          POST
        </label>
        <br />

        <label>Body:
          <textarea rows="10" value={reqBody} onChange={(e) => setReqBody(e.target.value)} />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AppControls;
