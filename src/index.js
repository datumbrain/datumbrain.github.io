import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Alternative2 from 'views/landing/Alternative2.jsx';

import './laapp.js';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact render={(props) => <Alternative2 {...props} />} />
  </BrowserRouter>,
  document.getElementById('root')
);
