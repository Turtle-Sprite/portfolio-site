import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { AiFillPhone } from "react-icons/ai";

function Footer() {
    return (
        <footer >
            <div className="footer">
                    <div className="footer-item">
                        <a style={{textDecoration: "none"}} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/crystal-sheeley-developer/'>
                            Linkedin
                            <FontAwesomeIcon className="m-2" style={{ height: "30px", width: "30px" }} icon={faLinkedin} />
                        </a>
                    </div>
                    <div className="footer-item">
                        <a style={{textDecoration: "none"}} target="_blank" rel="noreferrer" href='https://github.com/Turtle-Sprite/'>
                            GitHub
                            <FontAwesomeIcon className="m-2" style={{ height: "30px", width: "30px" }} icon={faGithub} />
                        </a>
                    </div>
                <div className="footer-item">
                    < AiFillPhone className="m-2" style={{ height: "30px", width: "30px" }} />
                    Call 213-649-8796
                </div>
            </div>
        </footer>
    );
}

export default Footer;