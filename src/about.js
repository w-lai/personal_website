import React from "react";
import Arches from "./photos/arches.jpeg";
import Amsterdam from "./photos/amsterdam.jpeg";
import SaintMichel from "./photos/saintmichel.jpeg";
import "./style/about.css";

class About extends React.Component {
    render () {
        return (
        <div className="About">
            <div className="Title">
                <h1>About Me!</h1>
                <h2>I love to travel - here's some of my favorites.</h2>
            </div>
            <div className="Images">    
                <div className="image_card1">
                    <img className="img" src={Arches} />
                    <div className="overlay1">
                        <div className="label1">Arches National Park</div>
                    </div>
                </div>
                <div className="image_card2">
                    <img className="img" src={Amsterdam} />
                    <div className="overlay2">
                        <div className="label2">Amsterdam</div>
                    </div>
                </div>
                <div className="image_card3">
                    <img className="img" src={SaintMichel} />
                    <div className="overlay3">
                        <div className="label3">Le Mont Saint Michel</div>
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}

export default About;