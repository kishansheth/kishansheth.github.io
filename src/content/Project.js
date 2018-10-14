import React from 'react';
import '../styles/styles.css';
import Content_Items from './content_items.json';
import Content_Dictionary from './content_dictionary.json'
import ContentHeader from './ContentHeader';
import OpenButton from '../styles/buttons/OpenButton';
import MediaQuery from 'react-responsive';
import Content from './Content';
import BarNav from '../frame/header/nav/BarNav'

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
        var project = Content_Dictionary[this.props.id];
        
        var project_json_string = JSON.stringify(project);
        var project_json_object = "";
        var title;
        var date;
        var category;
        var short_description;
        var long_description;
        var main_subtitle;
        var main_image;
        var other_images;
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
          other_images      = project_json_object.other_images;
        }
        // var content = Content_Dictionary[this.props.id];

        // var item_content_type = typeof item_content;
        

        return (
			  <div> 
                <BarNav />
                <div className="projectTitle">{title}</div>
                <img src={main_image} className="contentImage2" />
                {long_description}
                {main_subtitle}
                {title}
                <img src={other_images[0].image} className="contentImage2" />
                <img src={other_images[1].image} className="contentImage2" />
                <img src={other_images[2].image} className="contentImage2" />       
  		  </div>
		)
	}
}