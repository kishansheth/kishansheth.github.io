import React from 'react';
import '../styles/styles.css';
import Fade from 'react-reveal/Fade';
import UpArrow from '../styles/buttons/arrow/up_arrow.svg';
import DownArrow from '../styles/buttons/arrow/down_arrow.svg';
import LeftArrow from '../styles/buttons/arrow/left_arrow.svg';
import RightArrow from '../styles/buttons/arrow/right_arrow.svg';
import * as Vibrant from 'node-vibrant';
import ps from '../styles/buttons/icons/ps.png';
import ai from '../styles/buttons/icons/ai.png';
import pp from '../styles/buttons/icons/pp.png';
import dr from '../styles/buttons/icons/dr.png';
import lr from '../styles/buttons/icons/lr.png';
import ae from '../styles/buttons/icons/ae.png';
import pr from '../styles/buttons/icons/pr.png';
import xd from '../styles/buttons/icons/xd.png';
import ca from '../styles/buttons/icons/ca.png';
import ht from '../styles/buttons/icons/ht.png';
import cs from '../styles/buttons/icons/cs.png';
import py from '../styles/buttons/icons/py.png';
import fi from '../styles/buttons/icons/fi.png';
import d3 from '../styles/buttons/icons/d3.png';
import js from '../styles/buttons/icons/js.png';
import ja from '../styles/buttons/icons/ja.png';

var colorDiv = {}

var icons = {
    "ae": ae,
    "ai": ai,
    "ca": ca,
    "cs": cs,
    "dr": dr,
    "d3": d3,
    "fi": fi,
    "ht": ht,
    "ja": ja,
    "js": js,
    "lr": lr,
    "pp": pp,
    "ps": ps,
    "pr": pr,
    "py": py,
    "xd": xd
};

export default class ProjectTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }

        this.expand_collapse = this.expand_collapse.bind(this)
        this.handleArrow = this.handleArrow.bind(this)
    }

    expand_collapse() {
        this.setState({expanded: !this.state.expanded})
        console.log(this.state.expanded)
    }

    handleArrow(e) {
        console.log("HANDLEARROW");
        if (e.keyCode == 37) {
            this.props.updater(this.props.prev);
        }
        if (e.keyCode == 39) {
            this.props.updater(this.props.next);
        }
    }


    render() {

        let v = new Vibrant(this.props.main_image)
        console.log("main_image: ", this.props.main_image)
        var main_color = [];
        v.getPalette().then((palette) => {
          console.log(palette.LightVibrant._rgb)
          main_color = palette.LightVibrant._rgb
          console.log(main_color)
          colorDiv = {
            backgroundColor: "rgb(" + main_color[0] + "," + main_color[1] + "," + main_color[2] + ")",
          }
            console.log(colorDiv)
        })


        console.log("PROJECT TITLE PROPS: ", this.props);

        return (
            <div>
                <Fade bottom when={this.state.expanded}>
                    <div className="projectTitleWrapper">
                        <ProjectInfo title={this.props.title} category={this.props.category} date={this.props.date} description={this.props.description} tools={this.props.tools} link={this.props.link}/>
                    </div>
                </Fade>
                <div className="projectTitleContainer">
                    <div className="updateArrow" onKeyDown={this.handleArrow} onClick={() => this.props.updater(this.props.prev)}>
                        {this.props.prev !== null ? <img className="left_right" src={LeftArrow}/>: null}
                    </div>
                    <div className="projectTitle" onClick={this.expand_collapse}>
                        {this.props.title}
                        {this.state.expanded ? <img className="expand_collapse" src={DownArrow}/>: <img className="expand_collapse" src={UpArrow}/>}
                    </div>
                    <div className="updateArrow" onKeyDown={this.handleArrow} onClick={() => this.props.updater(this.props.next)}>
                        {this.props.next !== null ? <img className="left_right" src={RightArrow}/>: null}
                    </div>
                </div>
            </div>
        )
    }
}

class ProjectInfo extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="projectInfoContainer">
                <div className="projectInfoTitle">{this.props.title}</div>
                <div className="projectInfo">
                    <div className="projectInfoItem">{this.props.category}</div>
                    <div className="projectInfoItem">{this.props.date}</div>
                </div>
                <div className="projectInfoDescription">{this.props.description}</div>
                <div className="projectInfoItem">created with:</div>
                <div>
                    {this.props.tools.map((tool, index)=>{
                                return (
                                    <img className="toolIcon" src={icons[tool]}/>
                                )
                    })}
                </div>
                {this.props.link.url.length > 0 ? 
                    <div>
                        <div className="projectInfoItem">View on {this.props.link.name}:</div>
                        <div className="projectInfoLink">
                            <a href={this.props.link.url} target="_blank">{this.props.link.url}</a>
                        </div>

                    </div>
                    :
                    null
                }
            </div>
        )
    }
}