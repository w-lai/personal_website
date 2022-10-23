import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGithub,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
    return (
        <div className="social-container">
            <a href="https://www.youtube.com/channel/UC5byX6XtMIv95tni4Sz7R8g" className="youtube">
                <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
            <a href="https://instagram.com/warrenlai44" className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a href="https://github.com/w-lai" className="github">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
        </div>
    );
}