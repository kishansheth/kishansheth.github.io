import React from 'react';
import '../../styles/styles.css';
import AboutCard from './AboutCard';
import Fade from 'react-reveal/Fade';
import Circles from '../../images/Circles.jpg';
import Triangles from '../../images/abstract/triangles.svg';
import Quads from '../../images/abstract/quads.svg';
import Orbit1 from '../../images/abstract/orbit1.svg';
import Orbit2 from '../../images/abstract/orbit2.svg';
import {Link} from "react-router-dom";
import SkillBox from '../../content/SkillBox';

var cs_courses = ["Intro to CS in Java", "Data Structures in Java", "Advanced Programming in C/C++", "Fundamentals of Computer Systems", "CS Theory", "Advanced Web Design Studio", "Artificial Intelligence", "Natural Language Processing", "Data Visualization", "Computation and the Brain", "Programming Languages"];
var math_courses = ["Linear Algebra", "Calculus III (Multivariable)", "Discrete Mathematics"];


export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            tools: []
        }
    }

    componentDidMount() {

        fetch('/getTools').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                isLoaded: true,
                tools: data
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
                                    <table>
                                        {this.state.tools.map((tool) =>
                                            <SkillBox
                                                title={tool.title}
                                                skill={tool.skill}
                                                icon={tool.icon}
                                            />
                                        )}
                                    </table>
                                    
                                    
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