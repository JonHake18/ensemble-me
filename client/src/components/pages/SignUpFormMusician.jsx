import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DropdownList from "../Form/DropdownList";
// import city_names from "../Arrays/Cities";
// import state_names from "../Arrays/States";
import city_state from "../Arrays/State&Cities";



const SignUpFormMusician = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div>
    <h1>Musician Signup</h1>
    <form action="/" onSubmit={onSubmit}>

      {errors.summary && <p className="error-message">{errors.summary}</p>}


      <div className="row">

			  <div className="form-group col-md-12">
  				<button className="btn btn-secondary find-submit">
	  				<Link to="/signupband" className={window.location.pathname === "/signupband" ? "nav-link active" : "nav-link"}>Band</Link>
					</button>
					<button className="btn btn-outline-secondary find-submit">
						<Link to="/signupmusician" className={window.location.pathname === "/signupmusician" ? "nav-link active" : "nav-link"}>Musician</Link>
					</button>
				</div>

			  <div className="form-group col-md-4">
          <label htmlFor="firstName">First Name: </label>
          <input
        	  type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            onChange={onChange}
            value={user.firstName}
          />
        </div>
      

      	<div className="form-group col-md-4">
          <label htmlFor="lastName">Last Name: </label>
          <input
          	type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            onChange={onChange}
            value={user.lastName}
          />
        </div>
  
        <div className="form-group col-md-2">
					<label htmlFor="location">City: </label><br></br>
					<DropdownList data={city_state[user.state]} id="city-names"
            name="city"
            onChange={onChange}
            value={user.city}
          />
				</div>

				<div className="form-group col-md-2">
					<label htmlFor="location">State	: </label><br></br>
					<DropdownList data={Object.keys(city_state)} id="state-names"
            name="state"
            onChange={onChange}
            value={user.state}
          />
				</div>
      </div>

      <div className="row">
			  <div className="form-group col-md-4">
          <label htmlFor="instrument">Instrument: </label>
          <input
          	type="text"
            className="form-control"
            placeholder="Instrument"
            name="instrument"
            onChange={onChange}
            value={user.instrument}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="experience">Experience: </label>
          <input
          	type="text"
            className="form-control"
            placeholder="Experience"
            name="experience"
            onChange={onChange}
            value={user.experience}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="email">Email: </label>
          <input
          	type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={onChange}
            value={user.email}
          />
        </div>
      </div>

     <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="password">Password: </label>
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            onChange={onChange}
            value={user.password}
          />
        </div>
      </div>

      
      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="videoLink">Youtube Video Link: </label>
          <input
          	type="text"
            className="form-control"
            placeholder="https://youtu.be/A71aqufiNtQ"
            name="videoLink"
            filter="/?.*(?:youtu.be\\/|v\\/|u/\\w/|embed\\/|watch\\?.*&?v=)" 
            onChange={onChange}
            value={user.videoLink}
          />
        </div>
      </div>

      <div className="row">
				<button className="btn btn-outline-secondary find-submit" type="submit">
					Sign up
				</button>
			</div>

      <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
    </form>
  </div>
);

SignUpFormMusician.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpFormMusician;
