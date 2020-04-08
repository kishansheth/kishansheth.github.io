import React from 'react';
import '../../styles/styles.css';
import AboutCard from './AboutCard';
import Fade from 'react-reveal/Fade';
import ps from '../../styles/buttons/icons/ps.png';
import ai from '../../styles/buttons/icons/ai.png';
import pp from '../../styles/buttons/icons/pp.png';
import dr from '../../styles/buttons/icons/dr.png';
import d3 from '../../styles/buttons/icons/d3.png';
import lr from '../../styles/buttons/icons/lr.png';
import ae from '../../styles/buttons/icons/ae.png';
import pr from '../../styles/buttons/icons/pr.png';
import xd from '../../styles/buttons/icons/xd.png';
import ca from '../../styles/buttons/icons/ca.png';
import ht from '../../styles/buttons/icons/ht.png';
import cs from '../../styles/buttons/icons/cs.png';
import py from '../../styles/buttons/icons/py.png';
import ja from '../../styles/buttons/icons/ja.png';
import js from '../../styles/buttons/icons/js.png';
import un from '../../styles/buttons/icons/un.png';
import cp from '../../styles/buttons/icons/cp.png';
import fi from '../../styles/buttons/icons/fi.png';
import HongKong from '../../images/HongKong.png';
import Cloud from '../../images/Cloud.jpg';
import Circles from '../../images/Circles.jpg';
import Profile from '../../images/SiteProfile.jpg';
import Triangles from '../../images/abstract/triangles.svg';
import Quads from '../../images/abstract/quads.svg';
import Orbit1 from '../../images/abstract/orbit1.svg';
import Orbit2 from '../../images/abstract/orbit2.svg';
import {Link} from "react-router-dom";

var cs_courses = ["Intro to CS in Java", "Data Structures in Java", "Advanced Programming in C/C++", "Fundamentals of Computer Systems", "CS Theory", "Advanced Web Design Studio", "Artificial Intelligence", "Natural Language Processing", "Data Visualization", "Computation and the Brain", "Programming Languages"];
var math_courses = ["Linear Algebra", "Calculus III (Multivariable)", "Discrete Mathematics"];
var very_familiar_with = [ja, cp, js, ht, cs, ai, ps, xd, pp, fi];
var familiar_with = [py, lr, ae, pr, un, d3];

var hello = "HEY";

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: ""
        }
    }

    componentDidMount() {

        fetch('/hello').then(res => res.json()).then(data => {
            this.setState({
                isLoaded: true,
                items: data.res
            })
        });

    }

    render() {
        return (
            <div className="about_parallax_container">
                {/* <div className="parallax_pic">
                    <img src={Cloud}/>
                </div> */}
                <div className="parallax_pic">
                    <Fade>
                        <img src={Triangles}/>
                        <img src={Orbit1}/>
                    </Fade>
                </div>
                <div className="about_container">
                    <Fade left>
                        <div className="about_title">
                            Hey.
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="about_subtitle">
                            I’m Kishan Sheth. I'm a computer scientist and digital designer currently stationed in New York City. You can check out some of my projects in the porfolio section. Here’s a little about me:   
                        </div> 
                    </Fade>
                        <div className="about_cards_container">
                                <div className="about_card">
                                    <div className="about_card_title">Interests</div>
                                    <div className="about_card_subtitle">
                                        <div className="about_card_item">+ Software Development</div>
                                        <div className="about_card_item">+ Graphic Design</div>
                                        <div className="about_card_item">+ UI/UX Design</div>
                                        <div className="about_card_item">+ Photography</div>
                                        <div className="about_card_item">+ Videography</div>
                                    </div>
                                </div>
                                <div className="about_card">
                                    <div className="about_card_title">Education</div>
                                    <div className="about_card_subtitle">
                                        <div className="about_card_item">Indian Hill High School</div>
                                        <div className="about_card_item_subtitle">Cincinnati, OH</div>
                                        <div className="about_card_item">Columbia University</div>
                                        <div className="about_card_item_subtitle">New York, NY</div>
                                    </div>
                                </div>
                                <div className="about_card">
                                    <div className="about_card_title">Technical Skills</div>
                                    <div className="about_card_subtitle">
                                        <div className="about_card_item">Very familiar with:</div>
                                        {very_familiar_with.map((tool) =>
                                            <img className="about_tool_icon" src={tool}/>
                                        )}
                                        <div className="about_card_item">Familiar with:</div>
                                        {familiar_with.map((tool) =>
                                            <img className="about_tool_icon" src={tool}/>
                                        )}
                                    </div>
                                    
                                </div>
                                <div className="about_card">
                                    <div className="about_card_title">Relevant Coursework</div>
                                    <div className="about_card_subtitle">
                                        <div className="about_card_item">CS Courses</div>
                                        <div className="about_card_course_container">
                                            {cs_courses.map((course) =>
                                                <div className="about_card_course">
                                                    <div className="about_card_course_title">{course}</div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="about_card_item">Math Courses</div>
                                        <div className="about_card_course_container">
                                            {math_courses.map((course) =>
                                                <div className="about_card_course">
                                                    <div className="about_card_course_title">{course}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="about_card">
                                    <div className="about_card_title">Map (in progress)</div>
                                    <div className="about_card_subtitle">
                                        <div className="about_card_item">Some Places I Like.</div>
                                        <Link to="/map/">Click Here</Link>
                                    </div>
                                </div>
                                <div className="about_card_item">{this.state.items}</div>
                        </div>
                </div>
            </div>
        )
    }
}