import React from "react";
import Particles from "react-particles-js";
import Progress from "components/progress";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../context";
import "./styles.scss";

class Hero extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <section
                id={`${this.props.id}`}
                className="about"
                style={{ height: this.context.height }}
            >
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>
                                I'm a Full Stack web developer working from
                                Dallas Texas
                            </h3>
                            <div className="separator" />
                            <p>
                                I’m a full-stack developer with over 15 years of
                                experience. I specialize in ASP.NET Core,
                                Node.js and Angular but I’m also experienced in
                                building DeFi Dapps , NFT Minting Dapps , NFT
                                Market place development and GraphQL APIs. I
                                have built applications from scratch, maintained
                                existing and legacy code bases. I enjoy
                                exploring innovative solutions for challenging
                                tasks.
                            </p>
                            <div className="social social_icons">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="social_icon"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/cdcalderon"
                                        )
                                    }
                                />
                                {/* <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="social_icon"
                                    onClick={() =>
                                        window.open("https://www.twitter.com")
                                    }
                                /> */}
                                {/* <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="social_icon"
                                    onClick={() =>
                                        window.open("https://www.youtube.com")
                                    }
                                /> */}
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="social_icon"
                                    onClick={() =>
                                        window.open("https://www.linkedin.com")
                                    }
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                        <div className="line-text">
                            <h4>My Skills</h4>
                        </div>
                        <div className="skills-container">
                            <Progress
                                name="Solidity, Hardhat, Truffle, Web3, Ether"
                                value={70}
                                delay={1100}
                            />
                            <Progress name="Angular" value={95} delay={1100} />
                            <Progress name="React" value={75} delay={1100} />
                            <Progress
                                name="Asp.Net Core, WPF, MVC, C#"
                                value={95}
                                delay={1100}
                            />
                            <Progress
                                name="Entity Framework, GraphQL, MongoDB, SQL Server"
                                value={85}
                                delay={1100}
                            />

                            <Progress name="CSS" value={80} delay={1100} />
                            <Progress
                                name="Cypress, Protractor, Cucumber, Jasmine, Specflow, XUnit"
                                value={95}
                                delay={1100}
                            />
                        </div>
                    </Col>
                </Row>
            </section>
        );
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: false,
                                value_area: 5000,
                            },
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.5,
                        },
                        size: {
                            value: 1,
                        },
                    },
                    retina_detect: true,
                }}
            />
        );
    }
}

export default Hero;
