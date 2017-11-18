import * as React from "react";
import './Footer.css'
import { Grid, Row, Col} from 'react-bootstrap';


const Footer = () => {


    return (
        <div>

            <footer className="Footer">
                <div className="container">
                    <div className="colums">
                        <div className="colum">
                            <p>Lån til det du lige står og mangler</p>
                        </div>
                        <div className="column">
                            <a className="icon"><i className="fa fa-facebook"></i></a>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )

}
export default Footer;