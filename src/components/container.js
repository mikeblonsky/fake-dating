import React from "react";
import { Loader } from "../utils/helpers";
import { connect } from "react-redux";

const PAGIN_COUNT = 8;

class Container extends React.Component {
    constructor() {
        super();
        
        this.state = {
            "pageNumber": 0,
            "maxPaginLength": "",
            "users": []
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            "users": nextProps.users
        }, () => {
            this.setState({
                "maxPaginLength": Math.floor(this.state.users.length / PAGIN_COUNT),
            })
        });
    }
    handlePrevius = (event) => {
        event.preventDefault();
        this.setState({
            "pageNumber": this.state.pageNumber - 1
        });
    }
    handleNext = (event) => {
        event.preventDefault();
        this.setState({
            "pageNumber": this.state.pageNumber + 1
        });
    }
    renderElements = () => {
        const { pageNumber, users } = this.state;

        const start = pageNumber * PAGIN_COUNT;
        const end = start + PAGIN_COUNT;

        return users ? users.map((user, index) => {
            return <div key={index} className="persons__list__item">
                <img src={user.picture.large} alt={user.name.first} />
                <p>{user.name.first} {user.name.last}</p>
            </div>
        }).slice(start, end) : <Loader />
    }
    render() {
        console.log("pageNumber", this.state.pageNumber);
        return <div className="main__content">
            <nav className="wrap__pagination">
                <ul className="pagination">
                    {this.state.pageNumber !== 0 && (
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={(event) => this.handlePrevius(event)}>
                                Previous
                            </a>
                        </li>
                    )}
                    {(this.state.pageNumber <= this.state.maxPaginLength - 1) && (
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={(event) => this.handleNext(event)}>
                                Next
                            </a>
                        </li>
                    )}
                </ul>
            </nav>

            <div className="persons__list">
                {this.renderElements()}
            </div> 
        </div>;
    }
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(Container);