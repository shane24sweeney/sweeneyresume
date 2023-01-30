import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({
  testimonials: [
    {
      name: 'Jason Craven',
      recommendation: 'Shane was a great pleasure to have on the team. He was tremendous with all of the system automation work that he has been doing for years, but also stepped up and made the effort to pick up tasks with new technologies and help there as well. I could always count on Shane to keep me informed about his progress, and be certain that he would make every effort possible to get the job done, both right and on time. I offer my highest recommendation for Shane and would attest that he would be an asset in almost any organization.',
      signature: 'Jason Craven, Director of Software Development at GPS Trackit'
    }
  ]
}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
