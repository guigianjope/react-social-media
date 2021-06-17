import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
                <div className="container">
                    <div className="row">

                        {/* Column 1 */}
                        <div className="col">
                            <h4>Mediagram</h4>
                            <ul className="list-unstyled">
                                <li className="link">Some Info</li>
                                <li className="link">More Info</li>
                                <li className="link">Whatever</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col">
                            <h4>About</h4>
                            <ul className="list-unstyled">
                                <li className="link">Policies</li>
                                <li className="link">Careers</li>
                                <li className="link">Company info</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col">
                            <h4>More</h4>
                            <ul className="list-unstyled">
                                <li className="link">Some Info</li>
                                <li className="link">More Info</li>
                                <li className="link">Whatever</li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                        &copy;{new Date().getFullYear()} Mediagram | All rights reserved | Terms Of Service | Privacy
                        </p>
                        </div>

                </div>
            </div>
    );
}