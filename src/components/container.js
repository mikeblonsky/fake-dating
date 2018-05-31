import React from "react";
import { Loader } from "../utils/helpers";

export default class Container extends React.Component {
    render() {

        const {
            users
        } = this.props;

        return <div className="main__content">
            <div className="persons__list">
                {users ? users.map((user, index) => {
                    return <div key={index} className="persons__list__item">
                        <img src={user.picture.large} alt={user.name.first} />
                        <p>{user.name.first} {user.name.last}</p>
                    </div>
                }) : <Loader />}
            </div>

            <nav className="wrap__pagination">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>;
    }
}