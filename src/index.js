import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { AppProvider } from './hooks/AppProvider/AppProvider';

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
