import React from 'react';
import '../styles/styles.css';
import Content_Items from './content_items.json';
import Content_Dictionary from './content_dictionary.json';
import ContentHeader from './ContentHeader';
import OpenButton from '../styles/buttons/OpenButton';
import MediaQuery from 'react-responsive';
import Link from 'react-router-dom/Link';
import Fade from 'react-reveal/Fade';

function orderDict(unordered) {
    var ordered = {};

    console.log("Unordered: ", unordered);
  
    // Convert JSON dict to array of objects
    var project_objects = Object.keys(unordered).map(function(key) {
        return [key, Content_Dictionary[key].date];
    });
    console.log("Unordered objects: ", project_objects);
    
    // Sort the array based on the second element
    project_objects.sort(function(first, second) {
        return (new Date(second[1]) > new Date(first[1])) ? 1 : (new Date(second[1]) < new Date(first[1])) ? -1 : 0
    });
    console.log("Ordered project objects: ", project_objects);
  
    // Create new array with ordered objects
    var i;
    for (i = 0; i < project_objects.length; i++) {
        ordered[i.toString()] = unordered[project_objects[i][0]];
    }
    console.log(ordered);
    
    return ordered;
  }

class Content_Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};

        this.userClick = this.userClick.bind(this);
    }
    
    userClick() {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
                <Link to={"/projects/" + this.props.index}>
                <div className="contentBox" onClick={this.userClick}> 
                    <div className="category">{this.props.category}</div>
                    <div className="title">{this.props.title}</div>
                    <img className="contentImage" src={this.props.thumbnail} />
                    {/* <div className="description">{this.props.description}</div> */}
                    <MediaQuery maxWidth={599}>
                        <div>
                            {this.state.clicked ? <OpenButton linkTo="http://www.google.com"/> : null}
                        </div>
                    </MediaQuery>
                </div>
                </Link>
        )
    }
}

export default class Content extends React.Component {
    render() {
        return ( 
            <div>
                <ContentHeader title="recent"/>
                <div className="contentContainer">
                    {Object.values(orderDict(Content_Dictionary)).map((content_detail, index)=>{
                        if (index < 6) {
                            return (
                                <Fade>
                                    <Content_Item 
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
            </div>
        )
    }
}