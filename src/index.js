import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { hot } from 'react-hot-loader/root';

const Hot = process.env.NODE_ENV === 'production'
  ? App
  : hot(App);

ReactDOM.render(<Hot />, document.getElementById('root'));