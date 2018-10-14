import React from 'react';
import '../styles/styles.css';
import Content_Items from './content_items.json';
import ContentHeader from './ContentHeader';
import OpenButton from '../styles/buttons/OpenButton';
import MediaQuery from 'react-responsive';
import Link from 'react-router-dom/Link';

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
                    <img className="contentImage" src={this.props.image} />
                    <div className="description">{this.props.description}</div>
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
                    {Content_Items.map((content_detail, index)=>{
                            return (
                                <Content_Item 
                                    index={index}
                                    date={content_detail.date} 
                                    title={content_detail.title} 
                                    category={content_detail.category}
                                    image={content_detail.main_image}
                                    description={content_detail.short_description}
                                />
                            )
                        })}
                </div> 
            </div>
        )
    }
}