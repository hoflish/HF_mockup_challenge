import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
     <div>
       <Route exact path="/" component={() => null} />
       <Route path="/about" component={() => null} />
       <Route path="/contact" component={() => null}/>
     </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
