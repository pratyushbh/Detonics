import React from "react";
import { Link } from "react-router-dom";

const Footer= () => {
    return (
        <React.Fragment>   
            <div className="Footer">
                <div className="Footer_slides">
                    <h1>This IS FOOTER</h1>
                    <Link to="/about"><h1>About</h1></Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;