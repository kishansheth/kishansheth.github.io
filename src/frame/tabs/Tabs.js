// from https://alligator.io/react/tabs-component/

import React from "react";
import '../../styles/styles.css';
import MediaQuery from 'react-responsive';
import Link from 'react-router-dom/Link';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
      }
    
    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
              children,
            },
            state: {
              activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <div className="tab-list">
                {children.map((child) => {
                    const { label } = child.props;

                    return (
                    <Tab
                        activeTab={activeTab}
                        key={label}
                        label={label}
                        onClick={onClickTabItem}
                    />
                    );
                })}
                </div>
                <div className="tab-content">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
                </div>
            </div>
        );
    }
}

export default Tabs;