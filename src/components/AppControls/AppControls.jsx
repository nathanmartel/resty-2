import React, { useState, useEffect } from 'react';
import Results from '../Results/Results';

const AppControls = () => {
  const [url, setUrl] = useState('');
  const [reqType, setReqType] = useState('GET');
  const [reqBody, setReqBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqInit = {
      method: reqType,
      body: reqBody,
    };
    if(reqType === 'GET') delete reqInit.body;
    fetch(url, reqInit)
      .then(res => res.json())
      .then(json => setRes(json));
  };

  // useEffect({

  // }, [res]);

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
      < hr />
      <p>Results:</p>
      { res.map((item, index) => <Results key={index} item={res} />) }
    </>
  );
};

export default AppControls;
