import { Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
const Footer1 = ()=>(
    <div className="first-container py-4 footer1">
        <div className="row text-lg-center">
            <div className="col-lg-4 col-md-6 col-xs-12 text-left padding-left">
                <h6>Mema.</h6>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 icons-container mt-md-0 mt-2">
                <div className="icons d-inline-block ml-2 mr-2">
                    <FacebookIcon/>
                </div>
                <div className="icons d-inline-block ml-2 mr-2">
                    <Twitter/>
                </div>

                <div className="icons d-inline-block ml-2 mr-2">
                    <LinkedIn/>
                </div>

                <div className="icons d-inline-block ml-2 mr-2">
                    <Instagram/>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-xs-12 text-lg-right padding-right mt-3">
                <p>Copyright © 2021 Mema. All Rights Reserved.</p>
            </div>
        </div>
    </div>
)

export default Footer1