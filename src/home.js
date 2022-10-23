import React from "react";
import my_photo from './photos/myphoto.jpg';
import './style/App.css';
import Social from './social';

class Home extends React.Component {
    render () {
        return (
            <div className="Home">
                <div className="Home-body">
                    <img src={my_photo} className="my_photo" alt="photo" />
                    <p>
                    Warren Lai
                    </p>
                </div>
            <Social />
          </div>
        );
    }
}

export default Home;