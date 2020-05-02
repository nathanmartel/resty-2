import React from 'react';
import PropTypes from 'prop-types';
import './RequestForm.css';

const RequestForm = ({ url, reqType, reqBody, onUrlChange, onReqTypeChange, onReqBodyChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <label>URL:
        <input type="text" value={url} onChange={onUrlChange} />
      </label>
      <br />

      <label>
        <input type="radio" id="reqType-get" name="reqType" value="GET" checked={reqType === 'GET'} onChange={onReqTypeChange}/>
        GET
      </label>
      <label>
        <input type="radio" id="reqType-post" name="reqType" value="POST" checked={reqType === 'POST'} onChange={onReqTypeChange} />
        POST
      </label>
      <label>
        <input type="radio" id="reqType-post" name="reqType" value="PATCH" checked={reqType === 'PATCH'} onChange={onReqTypeChange} />
        PATCH
      </label>
      <label>
        <input type="radio" id="reqType-post" name="reqType" value="PUT" checked={reqType === 'PUT'} onChange={onReqTypeChange} />
        PUT
      </label>
      <label>
        <input type="radio" id="reqType-post" name="reqType" value="DELETE" checked={reqType === 'DELETE'} onChange={onReqTypeChange} />
        DELETE
      </label>
      <br />

      <label>Body:
        <textarea rows="5" value={reqBody} onChange={onReqBodyChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  reqType: PropTypes.string.isRequired,
  reqBody: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onReqTypeChange: PropTypes.func.isRequired,
  onReqBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RequestForm;
