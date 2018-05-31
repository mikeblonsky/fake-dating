import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// actions
import { fetchUsers } from "../actions/actions_index";

class App extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}
	render() {
		console.log("users: ", this.props.users);
		return (
			<div>React simple starter</div>
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