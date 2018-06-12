import React from "react";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            "gender": "",
            "nat": "",
            "usersCount": 0
        }
    }
    handleForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name, event.target.value);
    }
    onSubmit = () => {
        const {usersCount, gender, nat} = this.state;

        this.props.fetchUsers({number: usersCount, gender: gender, nat: nat});
    }
    render() {
        return <div className="header__wrapper">
            <div className="header">
                <div className="header__panels">
                    <div className="panel">
                        <img className="logo" src="../../img/fake_logo.png" />
                    </div>
                    <div className="panel">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hot or not</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quiz</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ulubione</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="search__block">
                    <div className="card card__color">
                        <div className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <select id="inputState" onChange={this.handleForm} name="gender" className="form-control">
                                            <option value="">Wybierz płeć</option>
                                            <option value="male">Mężczyzna</option>
                                            <option value="female">Kobieta</option>
                                        </select>
                                        {/* <small className="form-text text-muted">Your password must be 8-20 characters long</small>*/}
                                    </div>
                                    <div className="form-group col-md-4">
                                        <select id="inputState" onChange={this.handleForm} name="nat" className="form-control">
                                            <option value="">Wybierz kraj</option>
                                            <option value="AU">AU</option>
                                            <option value="BR">BR</option>
                                            <option value="CA">CA</option>
                                            <option value="CH">CH</option>
                                            <option value="DE">DE</option>
                                            <option value="DK">DK</option>
                                            <option value="ES">ES</option>
                                            <option value="FI">FI</option>
                                            <option value="FR">FR</option>
                                            <option value="GB">GB</option>
                                            <option value="IE">IE</option>
                                            <option value="IR">IR</option>
                                            <option value="NL">NL</option>
                                            <option value="NZ">NZ</option>
                                            <option value="TR">TR</option>
                                            <option value="US">US</option>
                                        </select>
                                        {/* <small className="form-text text-muted">Your password must be 8-20 characters long</small>*/}
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" onChange={this.handleForm} name="usersCount" placeholder="Ile wyników pokazać" className="form-control" id="inputZip" />
                                        {/* <small className="form-text text-muted">Your password must be 8-20 characters long</small> */}
                                    </div>
                                    <small className="text-special form-text text-muted">You can use AJAX to call the Random User Generator API and will receive a randomly generated user in return. If you are using jQuery, you can use the $.ajax() function in the code snippet below to get started.</small>
                                </div>
                            </form>
                            <div className="submit__wrapper">
                                <button onClick={this.onSubmit} type="submit" className="btn col-md-6 submitSearch">Wyszukaj</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>;
    }
}