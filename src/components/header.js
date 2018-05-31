import React from "react";

export default class Header extends React.Component {
    render() {
        return <div className="row header">
            <nav className="navigation">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hot or Not</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quiz</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Best Persons</a>
                    </li>
                </ul>
            </nav>
            <div className="search__block">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <select id="inputState" className="form-control">
                                        <option>Choose gender</option>
                                        <option>...</option>
                                    </select>
                                    <small className="form-text text-muted">Your password must be 8-20 characters long</small>
                                </div>
                                <div className="form-group col-md-4">
                                    <select id="inputState" className="form-control">
                                        <option>Choose country</option>
                                        <option>...</option>
                                    </select>
                                    <small className="form-text text-muted">Your password must be 8-20 characters long</small>
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="text" placeholder="How many count" className="form-control" id="inputZip" />
                                    <small className="form-text text-muted">Your password must be 8-20 characters long</small>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary col-md-6 submitSearch">Sign in</button>
                        </form>
                    </div>
                </div>


            </div>
        </div>;
    }
}