import React from "react";
import my_resume from "./photos/resume.jpg";

class Resume extends React.Component {
    render () {
        return (
        <div className="Resume">
            <div className="Title">
                <h1>Resume</h1>
            </div>
            <img src={my_resume} className="resume"></img>
        </div>
        );
    }
}

export default Resume;