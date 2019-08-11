import React from 'react';
import '../styles/styles.css';
import Content_Items from './content_items.json';
import Content_Dictionary from './content_dictionary.json'
import ContentHeader from './ContentHeader';
import OpenButton from '../styles/buttons/OpenButton';
import MediaQuery from 'react-responsive';
import Content from './Content';
import BarNav from '../frame/header/nav/BarNav'
import Fade from 'react-reveal/Fade';
import ReactLazyBlur from 'react-lazy-blur';
import ProjectTitle from '../content/ProjectTitle';
import BottomBanner from '../content/BottomBanner';
import * as Vibrant from 'node-vibrant';

var ordered_dict = orderDict(Content_Dictionary);

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

  // Create new object with ordered objects
  var i;
  for (i = 0; i < project_objects.length; i++) {
      ordered[i.toString()] = unordered[project_objects[i][0]];
  }
  console.log(ordered);
  
  return ordered;
}

class Project_Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="projectItem">
        <img src={this.props.image} className="projectItemPhoto"/>
        <div className="projectItemSubtitle">{this.props.subtitle}</div>
      </div>
    )
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.findSurrounding = this.findSurrounding.bind(this);
    this.updateProject = this.updateProject.bind(this);

    // set previous and next projects
    var surrounding = this.findSurrounding(props.id);

    this.state = {
      curr_proj: props.id,
      prev_proj: surrounding.prev,
      next_proj: surrounding.next
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  updateProject(new_id) {
    var surrounding = this.findSurrounding(new_id);
    this.setState({
      curr_proj: new_id,
      prev_proj: surrounding.prev,
      next_proj: surrounding.next
    });
  }

  findSurrounding(id) {
    var match_array = []
    var prev;
    var next;

    // array with all similar projects
    var category = ordered_dict[id].category;
    var subcategory = ordered_dict[id].subcategory;
    console.log(category, subcategory);
    
    for (var key in ordered_dict) {
      if (ordered_dict[key].category == category && ordered_dict[key].subcategory == subcategory) {
        match_array.push(key);
      }
    }
    console.log(match_array);

    // prev
    if (match_array.indexOf(id) == 0) {
      prev = match_array[match_array.length - 1];
    }
    else {
      prev = match_array[match_array.indexOf(id) - 1];
      console.log("prev", prev);
    }

    // next
    if (match_array.indexOf(id) == match_array.length - 1) {
      next = match_array[0];
    }
    else {
      next = match_array[match_array.indexOf(id) + 1];
      console.log("next", next);
    }

    return {prev: prev, next: next}
  }

  render() {
        var project = ordered_dict[this.state.curr_proj];
        var next_proj;
        var prev_proj;
        var project_json_string = JSON.stringify(project);
        var project_json_object = "";
        var title;
        var date;
        var category;
        var short_description;
        var long_description;
        var main_subtitle;
        var main_image;
        var main_image_small;
        var other_images;
        var tools;
        var link;
        if (project_json_string !== undefined)
        {
          console.log(project_json_string);
          project_json_object = JSON.parse(project_json_string);
          title             = project_json_object.title;
          date              = project_json_object.date;
          category          = project_json_object.category;
          short_description = project_json_object.short_description;
          long_description  = project_json_object.long_description;
          main_subtitle     = project_json_object.main_subtitle;
          main_image        = project_json_object.main_image;
          main_image_small  = project_json_object.main_image_small;
          other_images      = project_json_object.other_images;
          tools             = project_json_object.tools;
          link              = project_json_object.link;
        }
        // var content = Content_Dictionary[this.props.id];

        // var item_content_type = typeof item_content;
        
        const mainImageStyle = {
          backgroundImage: 'url(' + main_image + ')',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        };

        return (
			  <div> 
                <ProjectTitle 
                  title={title} 
                  category={category}
                  date={date}
                  description={long_description}
                  tools={tools}
                  link={link}
                  main_image={main_image}
                  updater={this.updateProject}
                  prev={this.state.prev_proj}
                  next={this.state.next_proj}
                />
                <Fade>
                <div className="projectContainer">
                  <div className="projectMain">
                    <div className="projectMainImageContainer">
                      <div style={mainImageStyle} className="projectMainImage"></div>
                    </div>
                    {/* <div className="projectInfoContainer">
                      <div className="projectInfo">
                        <div className="projectInfoItem">{category}</div>
                        <div className="projectInfoItem">{date}</div>
                      </div>
                      <div className="projectInfoDescription">{long_description}</div>
                    </div> */}
                  </div>

                </div>
                  
                </Fade>

                <div className="projectContainer">
                    {other_images.map((image_detail, index)=>{
                            return (
                                <Fade key={index}>
                                    <Project_Item 
                                      image={image_detail.image}
                                      image_small={image_detail.image_small}
                                      subtitle={image_detail.subtitle}
                                    />
                                </Fade>
                            )
                        })}
                </div>       
  		  </div>
		)
	}
}

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("ProjectPage props: ", props);
  }

  render() {
    return (
      <div>
        <BarNav />
        <Project id={this.props.id} />
      </div>
    )
  }
}