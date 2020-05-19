import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestForm.css';

const RequestForm = ({ 
  url, 
  method, 
  body, 
  onUrlChange, 
  onMethodChange, 
  onBodyChange, 
  authType, 
  authUsername, 
  authPassword, 
  authToken, 
  authUsernamePlaceholder, 
  authPasswordPlaceholder, 
  authTokenPlaceholder, 
  onAuthTypeChange, 
  onAuthUsernameChange, 
  onAuthPasswordChange, 
  onAuthTokenChange, 
  onSubmit }) => { 

  return (
    <div className="requestContainer">
      <h3>Request</h3>
      <form onSubmit={onSubmit}>
        <label>URL:
          <input type="text" value={url} onChange={onUrlChange} />
        </label>

        <div className={styles.radioControls}>
          <label>
            <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onMethodChange}/>
            GET
          </label>
          <label>
            <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onMethodChange} />
            POST
          </label>
          <label>
            <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onMethodChange} />
            PATCH
          </label>
          <label>
            <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onMethodChange} />
            PUT
          </label>
          <label>
            <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onMethodChange} />
            DELETE
          </label>
        </div>

        <label>Body:
          <textarea rows="5" value={body} onChange={onBodyChange} />
        </label>
        <br />

        <div className={styles.authHeaders}>
          <h4>Headers</h4>
          <div className={styles.authSelect}>
            <label>Authorization Type:
              <select onChange={onAuthTypeChange} value={authType}>               
                <option value="">None</option>
                <option value="basic">Basic Authorization</option>
                <option value="bearerToken">Bearer Token</option>
              </select>
            </label>
          </div>

          <div className={styles.basicAuth}>
            <fieldset>
              <legend>Basic Authorization:</legend>
              <input type="text" placeholder={authUsernamePlaceholder} value={authUsername} onChange={onAuthUsernameChange} />
              <input type="text" placeholder={authPasswordPlaceholder} value={authPassword} onChange={onAuthPasswordChange} />
            </fieldset>
          </div>

          <div className={styles.bearerToken}>
            <label>Bearer Token:
              <input type="text" placeholder={authTokenPlaceholder} value={authToken} onChange={onAuthTokenChange} />
            </label>
          </div>

        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authType: PropTypes.string.isRequired,
  authUsername: PropTypes.string.isRequired,
  authPassword: PropTypes.string.isRequired,
  authToken: PropTypes.string.isRequired,
  authUsernamePlaceholder: PropTypes.string.isRequired,
  authPasswordPlaceholder: PropTypes.string.isRequired,
  authTokenPlaceholder: PropTypes.string.isRequired,
  onAuthTypeChange: PropTypes.func.isRequired, 
  onAuthUsernameChange: PropTypes.func.isRequired,
  onAuthPasswordChange: PropTypes.func.isRequired,
  onAuthTokenChange: PropTypes.func.isRequired
};

export default RequestForm;
