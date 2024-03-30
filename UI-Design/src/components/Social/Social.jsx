import './Social.css'

import instaIcon from "../../assets/icons/insta-icon.png";
import githubIcon from "../../assets/icons/github-icon.png";
import youtubeIcon from "../../assets/icons/youtube-icon.jpg";
import whatsappIcon from "../../assets/icons/whatsapp-icon.jpg";
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Social() {
    return (
        <div className="box">
            <Nav/>
            <div className="social-background-overlay"></div>

            <div className="insta-icon-bg">
                <center>
                    <Link to="cmd://sr-instagram">
                        <img src={instaIcon} alt="" className="insta-icon" />
                    </Link>
                </center>
            </div>
            <div className="github-icon-bg">
                <center>
                    <Link to="cmd://sr-github">
                        <img src={githubIcon} alt="" className="github-icon" />
                    </Link>
                </center>
            </div>
            <div className="youtube-icon-bg">
                <center>
                    <Link to="cmd://sr-youtube">
                        <img src={youtubeIcon} alt="" className="youtube-icon" />
                    </Link>
                </center>
            </div>
            <div className="whatsapp-icon-bg">
                <center>
                    <Link to="cmd://sr-whatsapp">
                        <img src={whatsappIcon} alt="" className="whatsapp-icon" />
                    </Link>
                </center>
            </div>

        </div>
    )
}

export default Social