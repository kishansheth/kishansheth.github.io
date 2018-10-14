import React from "react"
import '../styles/styles.css'
import MediaQuery from 'react-responsive'
import ContentHeader from './ContentHeader'
import Content_Items from './content_items.json'

class Panel_Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel">
                <img src={this.props.image} />
            </div>
        )
    }
}

export default class Panels extends React.Component {
    render () {
        return (
            <div>
                <div className="panelsContainer">
                    {Content_Items.map((content_detail, index)=>{
                        return (
                            <Panel_Item 
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