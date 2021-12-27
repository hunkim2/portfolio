import React from 'react';
import "./Home.scss";
const Home = () => {
    return (
        <div id="home" className="home">
            <div className="home__text">
                <h1 className="home__text--title">Hi! I am Hun Kim.</h1>
                <h3 className="home__text--description">I am Software Engineer.</h3>
            </div>
            <img className="home__img" />
            <div className="home__text">
                <p>Hello! Thanks for visiting my portfolio!</p>
                <p>I am Hun. I also go by Howard!</p>
                <p>I am a Software Engineer living in Washington D.C. I have experience creating mobile-responive websites. My professional experience ranges from creating SaaS products to ecommerce websites, and much much more.</p>
                <p>My hope is that you'll see my creative and imaginative side with this interactive mobile-friendly, cross-platform portfolio.</p>
            </div>
        </div>
    )
}
export default Home;