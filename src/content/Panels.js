import React from "react";
import '../styles/styles.css';
import MediaQuery from 'react-responsive';
import ContentHeader from './ContentHeader';
import Content_Items from './content_items.json';
import Link from 'react-router-dom/Link';
import Content_Dictionary from './content_dictionary.json';
import Fade from 'react-reveal/Fade';
import Tabs from '../frame/tabs/Tabs';
import Content from "./Content";

var ordered_projects = []

function orderDict(unordered) {
    var ordered = {};

    // Convert JSON dict to array of objects
    var project_objects = Object.keys(unordered).map(function(key) {
        return [key, Content_Dictionary[key].date];
    });
    console.log(project_objects);
    
    // Sort the array based on the second element
    project_objects.sort(function(first, second) {
        return new Date(second[1]) - new Date(first[1]);
    });
    console.log("project_object: ", project_objects);

    // Create new array with ordered objects
    var i;
    for (i = 0; i < project_objects.length; i++) {
        ordered[i.toString()] = unordered[project_objects[i][0]];
    }
    console.log(ordered);
    
    return ordered;
}

class Panel_Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={"/projects/" + this.props.index}>
                <div className="panel">
                    <img src={this.props.thumbnail} />
                    <div className="panelDiv">
                        <div className="panelTitle">
                            {this.props.title}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

class Tab_Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="panelsContainer">
                {Object.values(orderDict(Content_Dictionary)).map((content_detail, index)=>{
                    if ((content_detail.category == this.props.category && content_detail.subcategory.length < 1) || content_detail.subcategory == this.props.category) {
                        return (
                            <Fade>
                                <Panel_Item
                                    index={index}
                                    date={content_detail.date} 
                                    title={content_detail.title} 
                                    category={content_detail.category}
                                    thumbnail={content_detail.thumbnail}
                                    image={content_detail.main_image}
                                    description={content_detail.short_description}
                                />
                            </Fade>
                        )
                    }
                    else {
                        return null;
                    }
                    
                })}
            </div>
        );
    }
}

export default class Panels extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render () {
        return (
            <div>
                <div className="projectGap"/>
                <Fade>
                    <Tabs>
                        <div label="art / experimental">
                            <Tab_Content category="art / experimental"/>
                        </div>
                        <div label="ui / ux">
                            <Tab_Content category="ui / ux"/>
                        </div>
                        <div label="promotional">
                            <Tabs>
                                <div label="branding">
                                    <Tab_Content category="branding"/>
                                </div>
                                <div label="posters">
                                    <Tab_Content category="posters"/>
                                </div>
                                <div label="shirts">
                                    <Tab_Content category="shirts"/>
                                </div>
                            </Tabs>
                        </div>
                        <div label="photo">
                            <Tabs>
                                <div label="cities">
                                    <Tab_Content category="cities"/>
                                </div>
                                <div label="events">
                                    <Tab_Content category="events"/>
                                </div>
                                <div label="nature">
                                    <Tab_Content category="nature"/>
                                </div>
                                <div label="experimental">
                                    <Tab_Content category="experimental"/>
                                </div>
                                <div label="people">
                                    <Tab_Content category="people"/>
                                </div>
                            </Tabs>
                        </div>
                        <div label="video">
                            <Tab_Content category="video"/>
                        </div>
                    </Tabs>
                </Fade>
                
            </div>
        )
    }
}