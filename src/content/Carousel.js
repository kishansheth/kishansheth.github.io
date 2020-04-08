import React from 'react';
import '../styles/styles.css';
// import image1 from '/images/ui_ux/spectator/spectator.png';
import Content_Dictionary from "./content_dictionary.json";
import Fade from "react-reveal/Fade";
import TickerDiv from "./TickerDiv";
import Link from "react-router-dom/Link";


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
        return (new Date(second[1]) > new Date(first[1])) ? 1 : (new Date(second[1]) < new Date(first[1])) ? -1 : 0
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

var carousel_items = [];
var values = Object.values(ordered_dict);

var i;
for (i = 0; i < values.length; i++) {
    if (values[i]["slideshow_include"]) {
        values[i]["index"] = i;
        carousel_items.push(values[i]);
    }
}

// for (var project of Content_Dictionary) {
//     if (project["slideshow_included"] == true) {
//         carousel_items.push(project)
//     }
// }

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({cur_feature: 0});
    }

    changeFeature() {
        var new_feature = (this.state.cur_feature == carousel_items.length - 1) ? 0 : this.state.cur_feature + 1;
        this.setState({
            cur_feature: new_feature
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.changeFeature(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="slideshow">
                <img src={carousel_items[this.state.cur_feature].slideshow_image}/>
                <Link to={"/projects/" + carousel_items[this.state.cur_feature].index}>
                    <div className="slideshow_info">
                        <div className="slideshow_info_category">{carousel_items[this.state.cur_feature].category}</div>
                        <div className="slideshow_info_title">{carousel_items[this.state.cur_feature].title}</div>
                        <div className="slideshow_info_subtitle">{carousel_items[this.state.cur_feature].short_description}</div>
                    </div>
                </Link>
                <div className="tickerContainer">
                    <TickerDiv text={"Welcome, I'm Kishan. I'm a computer scientist and digital designer currently stationed in New York City. I like to craft products that meet real human needs."}/>
                    {/*<TickerDiv text={"welcome   bienvenidas   ようこそ   स्वागत हे   أهلا بك   欢迎    어서 오십시오   willkommen   добро пожаловать   ยินดีต้อนรับ   خوش آمدید   karibu"}/>*/}
                </div>
            </div>
        );
    }
}