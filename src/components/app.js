import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// actions
import { fetchUsers } from "../actions/actions_index";

// components
import Header from "./header";
import Container from "./container";

class App extends Component {
	componentWillMount() {
		this.props.fetchUsers({"number": 20, gender: "female", nat: "ES"});
	}
	componentDidMount() {
		console.log("users: ", this.props.users && this.props.users);
	}
	render() {
		return (
			<div className="main-app-container">
				<Header 
					fetchUsers={this.props.fetchUsers}
				/>
				<Container 
					users1={this.props.users}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchUsers
	}, dispatch);
}
function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);