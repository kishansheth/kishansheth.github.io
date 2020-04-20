import React from "react";
import '../styles/styles.css';
import Link from 'react-router-dom/Link';

export default class SkillBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pills = [];
        let skill = parseInt(this.props.skill);
        for (let i=0; i < 5; i++) {
            if (i < skill) {
                pills.push(<div className="skill_pill"></div>);
            }
            else {
                pills.push(<div className="skill_pill_hollow"></div>);
            }
        }

        return (
            <tr>
                <td style={{width: '50px'}}><img className="about_tool_icon" src={this.props.icon}/></td>
                <td>{this.props.title}</td>
                <td style={{textAlign: 'right'}}>{pills}</td>
            </tr>
            
        )
    }
}