import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  render() {
    const { user } = this.props.auth;


    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{ fontFamily: "monospace" }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN JWT Auth
            </Link>

            {/* <Link
              to="/facebook.com"
              style={{ fontFamily: "monospace" }}
              className="col s5 brand-logo right black-text">
              <i className="material-icons">code</i>
              FB
            </Link> */}

          <Link to="/login" className="col s6 brand-logo right black-text">
              {user.name !== undefined ? 'Hi, '+user.name : 'Login'}
          </Link>    
          </div>          
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  // logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  loginUser: PropTypes.func.isRequired,
  errors: state.errors,
  auth: state.auth,
});

// export default Navbar;

export default connect(mapStateToProps, { loginUser, logoutUser })(Navbar);
