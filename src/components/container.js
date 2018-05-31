import React from "react";

export default class Container extends React.Component {
    render() {
        return <div className="row">
            <div className="persons__list">
                <div className="persons__list__item">
                    <img src="https://www.czmcam.org/wp-content/uploads/2017/02/Vintage-kitchen-decor-kitchen-traditional-with-tile-backsplash-dark-wood-floors-2-200x180.jpg" alt="Card image cap" />
                    <p>Nadia Kowalska</p>
                </div>
                <div className="persons__list__item">
                    <img src="https://www.czmcam.org/wp-content/uploads/2017/02/Vintage-kitchen-decor-kitchen-traditional-with-tile-backsplash-dark-wood-floors-2-200x180.jpg" alt="Card image cap" />
                    <p>Nadia Kowalska</p>
                </div>
                <div className="persons__list__item">
                    <img src="https://www.czmcam.org/wp-content/uploads/2017/02/Vintage-kitchen-decor-kitchen-traditional-with-tile-backsplash-dark-wood-floors-2-200x180.jpg" alt="Card image cap" />
                    <p>Nadia Kowalska</p>
                </div>
                <div className="persons__list__item">
                    <img src="https://www.czmcam.org/wp-content/uploads/2017/02/Vintage-kitchen-decor-kitchen-traditional-with-tile-backsplash-dark-wood-floors-2-200x180.jpg" alt="Card image cap" />
                    <p>Nadia Kowalska</p>
                </div>
                <div className="persons__list__item">
                    <img src="https://www.czmcam.org/wp-content/uploads/2017/02/Vintage-kitchen-decor-kitchen-traditional-with-tile-backsplash-dark-wood-floors-2-200x180.jpg" alt="Card image cap" />
                    <p>Nadia Kowalska</p>
                </div>
                <div className="persons__list__item">
                    <img src="https://www.czmcam.org/wp-content/uploads/2017/02/Vintage-kitchen-decor-kitchen-traditional-with-tile-backsplash-dark-wood-floors-2-200x180.jpg" alt="Card image cap" />
                    <p>Nadia Kowalska</p>
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>

            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
        </div>;
    }
}