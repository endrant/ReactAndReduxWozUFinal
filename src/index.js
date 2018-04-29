import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from "react-redux";
import reducer from '../src/reducers/reducer';
import { Home, Search, Mine, Counter } from "./screens";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from 'react-dom';


let store = createStore(reducer)



const Index = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/mine" component={Mine} />
        <Route path="/counter" component={Counter} />
      </div>
    </Router>
  </Provider>
);

render(<Index />, document.getElementById('root'));