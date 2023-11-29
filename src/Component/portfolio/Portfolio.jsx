
import React from "react";

import './portfolio.css'
import Img from '../../Assets/Corona-Bootstrap-Dash.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5 className="text-light">My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image" >
                        <img src={Img} alt="IMG"></img>
                    </div>
                    <h3>This Is Portfolio Item Tiltle</h3>
                    <div className="portfolio_item-CTA">
                        <a href="http://github.com" className="btn">GitHub</a>
                        <a href="http://dribble.com" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image" >
                        <img src={Img} alt="IMG"></img>
                    </div>
                    <h3>This Is Portfolio Item Tiltle</h3>
                    <div className="portfolio_item-CTA">
                        <a href="http://github.com" className="btn">GitHub</a>
                        <a href="http://dribble.com" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image" >
                        <img src={Img} alt="IMG"></img>
                    </div>
                    <h3>This Is Portfolio Item Tiltle</h3>
                    <div className="portfolio_item-CTA">
                        <a href="http://github.com" className="btn">GitHub</a>
                        <a href="http://dribble.com" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default Portfolio;