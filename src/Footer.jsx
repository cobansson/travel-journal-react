import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook, faReact } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="footer--brands">
                <h3>Follow me on</h3>
                <FontAwesomeIcon icon={faTwitter} href="#" className="twitter--icon"/>
                <FontAwesomeIcon icon={faInstagram} href="#" className="instagram--icon"/>
                <FontAwesomeIcon icon={faFacebook} href="#" className="facebook--icon"/>
            </div>
            <h3>Powered by React.js <FontAwesomeIcon spin icon={faReact} className="react--logo"/></h3>
        </footer>
    )
}