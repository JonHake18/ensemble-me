import axios from 'axios';
import Auth from '../modules/Auth.js';
require("dotenv");

function urlQueryString(json){
	let queryString = "";
	let key;
	for(key in json){
		// if(key === "instruments" && json[key].length > 0){
		// 	queryString += `${key}=`;
		// 	queryString += json[key].join(",");
		// }
		// else{
			if(json[key] !== "" && json[key] !== undefined){
				queryString += `${key}=`;
				queryString += json[key];
				queryString += `&`;
			}
		// }
		
	}
	return queryString.slice(0, -1);
}


export default {
	/* the GET '/api/musicians/APIkey=' route uses URL query strings.
		after the route URL, a question mark needs to be placed.
		Then the query strings can be listed one after another using '&'
		Spaces in strings or hyphens need to be replaced by their encoded form: '%20'
		Currently the API only supports searches with single instruments and single exp queries
		example:
		{
			firstName: "Francis",
			lastName: "Biker",
			city: "Kansas City",
			state: "Kansas",
			instruments: ["tuba", "drums", "harmonica"],
			experience: 4
		}
		`/api/musicians/APIkey=${process.env.APIkey}?firstName=Francis&lastName=Biker&city=Kansas%20City&state=Kansas&instruments=tuba,drums,harmonica&experience=4`
	*/
     searchMusicians: function(queryObj){
          return axios({
			method: 'GET',
			url: `/api/musicians/APIkey=${process.env.REACT_APP_APIkey}?${urlQueryString(queryObj)}`,
			headers: {
				'Authorization' : `bearer ${Auth.getToken()}`
			}});
	},
	searchBands: function(queryObj){
		return axios({
			method: 'GET',
			url: `/api/bands/APIkey=${process.env.REACT_APP_APIkey}?${urlQueryString(queryObj)}`,
			headers: {
				'Authorization' : `bearer ${Auth.getToken()}`
			}});
	},
	/* EXAMPLE user signon request body:
		{
			"firstName" : "Francis",
			"lastName" : "Biker",
			"password" : "jellyfish",
			"email" : "francisBiker@email.com",
			"city" : "Philidelphia",
			"state" : "Pennsylvania",
			"isMusician" : true,
			"instruments" : [
				{
					"instrument" : "drums",
					"yearsExp" : 3
				},{
					"instrument" : "tuba",
					"yearsExp" : 5
				}
			]
		}
	*/
	newUserSignup: function(userObj){
		return axios.post(`auth/signup`, userObj)
	},
	getMusicianById: function(id){
		return axios({
			method: 'GET',
			url: `/api/musicians/APIkey=${process.env.REACT_APP_APIkey}/${id}`,
			headers: {
				'Authorization' : `bearer ${Auth.getToken()}`
			}});
	},
	getBandById: function(id){
		return axios({
			method: 'GET',
			url: `/api/bands/APIkey=${process.env.REACT_APP_APIkey}/${id}`,
			headers: {
				'Authorization' : `bearer ${Auth.getToken()}`
			}});	},
	getUserById: function(id){
		return axios({
			method: 'GET',
			url: `/api/user/APIkey=${process.env.REACT_APP_APIkey}/${id}`,
			headers: {
				'Authorization' : `bearer ${Auth.getToken()}`
			}});	},
	// Musician, Band, and Instrument Information will be populated in the JSON
	getAllUsers: function(){
		return axios.get(`api/user/APIkey=${process.env.REACT_APP_APIkey}`)
	}
}