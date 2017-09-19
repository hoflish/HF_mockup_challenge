import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import DevTools from './containers/DevTools';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
     <div>
       <Route exact path="/" component={() => <div>home</div>} />
       <Route path="/app" component={App} />
       <Route path="/about" component={() => <div>about</div>} />
       <Route path="/contact" component={() => <div>contact</div>}/>
       <Route component={() => <div>NotFound</div>}/>
       <DevTools />
     </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
