import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import ReduxStore from './redux/store/store';


ReactDOM.render(<ReduxProvider store={ReduxStore()}>
<BrowserRouter>
<App />
</BrowserRouter>
</ReduxProvider>, document.getElementById('root'));
