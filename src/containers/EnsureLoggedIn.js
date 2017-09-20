import React, {Component} from 'react';
import {Route} from 'react-router-dom';

export default class EnsureLoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    const authenticated = window.localStorage.getItem('loggedIn');
    console.log(authenticated);
    this.setState({
      isLoggedIn: authenticated
    });

    if (!authenticated) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      console.log("dispatch setRedirectUrl(currentUrl)");
      console.log("go to /login pages");
      // dispatch(setRedirectUrl(currentURL));
      // browserHistory.replace("/login")
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Route {...this.props}/>
    } else {
      return null
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
// function mapStateToProps(state, ownProps) {
//   return {
//     authenticated: state.authReducer.authenticated,
//     // currentURL: ownProps.location.pathname
//   }
// }
//
// export default withRouter(connect(mapStateToProps)(EnsureLoggedIn));
