import propTypes from 'prop-types';
import React from 'react';
import './style/ProjectCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const ProjectCard = ({
    mainName, user, url
}) => {
    const toProject = () => {
        window.location.assign(url);
    }
    return (
        <div className="cardWrapper" onClick={() => toProject()}>
            <div className="imageWrapper">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
            <div className="textContainer">
                <p className="name">{mainName}</p>
                <p className="user">{user}</p>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    avatar: propTypes.string,
    userName: propTypes.string,
    user: propTypes.string,
    url: propTypes.string,
};