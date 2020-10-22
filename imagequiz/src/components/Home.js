import React from "react";
import "./Home.css";
import flowerArray from "./flowerArray.js";
import Flower from "./Flower.js";

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			showLoginForm: false,
			authenticated: false
		};
	}
	login = () => {
		this.setState({showLoginForm: true});
	}

	onSubmit = (event) => {
		if(this.state.username.trim().length > 0) {
			this.setState({authenticated: true});
		}
		event.preventDefault();
	}

	onInputChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({[name]: value});
	}

	render(){
		if ((!this.state.authenticated) && this.state.showLoginForm){
			return (
				<div>
					<form onSubmit={this.onSubmit}>
						<lable>Username:</lable>
						<input 
						type="text" 
						name="username"
						value={this.state.username}
						onChange={this.onInputChange}></input>
						<button type="submit">Login</button>
					</form>
				</div>
			);
		}

		return (
			<div>
				<div className="loginButton">
					{this.state.authenticated ? this.state.username: <button onClick={this.login}>Login</button>}
				</div>
				{flowerArray.map(f => <Flower data={f}/>)}
			</div>
		)
	}
}




export default Home;