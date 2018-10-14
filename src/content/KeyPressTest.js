import React from "react"

export default class KeyPressTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pressed: false};
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress(event) {
            this.setState({pressed: !this.state.pressed});
            console.log('button pressed!')
    }

    render() {
        return (
            <div className="footer" onMouseDown={this.buttonPress} onMouseOver={this.buttonPress}>
                {this.state.pressed ? <div>Pressed</div> : <div>Not Pressed</div>}
            </div>
        )
    }

}