import React from "react";

const Hero = ({ header, body, footer }) => (
    <section
        className="hero is-success is-fullheight"
        style={{
            backgroundColor: "var(--lgreen)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
        {/* <div className="hero-head">{header}</div> */}
        <div className="hero-body">
            <div className="container">{body}</div>
        </div>
        <div className="hero-foot">{footer}</div>
    </section>
);

export default Hero;
