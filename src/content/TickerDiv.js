import React from 'react';
import '../styles/styles.css';
import Ticker from 'react-ticker';

export default class TickerDiv extends React.Component {
    render() {
        return (
           <div className="ticker_text">
            <Ticker speed={7}>{() => <div className="ticker_text_frame">{this.props.text}</div>}</Ticker>
           </div>
        )
    }
}