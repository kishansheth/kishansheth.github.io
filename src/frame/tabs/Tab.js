// from https://alligator.io/react/tabs-component/

import React from "react";
import '../../styles/styles.css';
import MediaQuery from 'react-responsive';
import Link from 'react-router-dom/Link';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = 'tab-list-item';
  
      if (activeTab === label) {
        className += ' tab-list-active';
      }
  
      return (
        <div
          className={className}
          onClick={onClick}
        >
          {label}
        </div>
      );
    }
  }
  
  export default Tab;