import React from "react";
import { Loader } from "../utils/helpers";
import { connect } from "react-redux";

const PAGIN_COUNT = 8;

class Container extends React.Component {
    constructor() {
        super();
        
        this.state = {
            "paginCounter": 0,
            "pagin": 8,
            "users": []
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            "users": nextProps.users
        });
    }
    pagination = (event, type) => {
        event.preventDefault();
        
        const { users } = this.state;

        if (type === "next") {
            this.setState({
                "paginCounter": this.state.paginCounter + PAGIN_COUNT,
                "pagin": this.state.pagin + PAGIN_COUNT
            });
        }

        if (type === "prev") {
            this.setState({
                "paginCounter": this.state.paginCounter - PAGIN_COUNT,
                "pagin": this.state.pagin - PAGIN_COUNT
            });
        }
    }
    render() {
        const { users } = this.state;

        return <div className="main__content">
            <div className="persons__list">
                {users ? users.map((user, index) => {
                    return <div key={index} className="persons__list__item">
                        <img src={user.picture.large} alt={user.name.first} />
                        <p>{user.name.first} {user.name.last}</p>
                    </div>
                }).slice(this.state.paginCounter, this.state.pagin) : <Loader />}
            </div>

            <nav className="wrap__pagination">
                <ul className="pagination">
                    {this.state.paginCounter > 0 && (
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={(event) => this.pagination(event, "prev")}>
                                Previous
                            </a>
                        </li>
                    )}
                    
                    {this.state.pagin < this.state.users.length && (
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={(event) => this.pagination(event, "next")}>
                                Next
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>;
    }
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(Container);