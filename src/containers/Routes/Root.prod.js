import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../../components/App/index';
import AuthRegister from "../../components/AuthRegister/index";
import Login from "../../components/Login/index";

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={AuthRegister} />
        <Route path="/about" component={() => <div>about</div>} />
        <Route path="/contact" component={() => <div>contact</div>}/>
        <Route compoenent={() => <div>Not Found</div>}/>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
