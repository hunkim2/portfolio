import React from 'react';
import "./Home.scss";
const Home = () => {
    return (
        <div className="home">
            <div className="home__text">
                <h1 className="home__text--title">Hi! I am Hun Kim.</h1>
                <h3 className="home__text--description">I am Software Engineer.</h3>
            </div>
            <img className="home__img" />
        </div>
    )
}
export default Home;