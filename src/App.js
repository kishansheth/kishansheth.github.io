import React from "react"
import './styles/styles.css'
import MediaQuery from 'react-responsive'
import BarNav from './frame/header/nav/BarNav'
import BurgerNav from './frame/header/nav/BurgerNav'
import Content_Items from './content/content_items.json'
import Content_Dictionary from './content/content_dictionary.json'
import Carousel from './content/Carousel'
import Content from './content/Content'
import Footer from './frame/footer/Footer.js'
import Links from './content/Links'
import Project from './content/Project'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// pages
import Gallery from './pages/gallery.js'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Index} exact />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/projects/:id" component={ProjectRouter}/>
        </div>
      </Router>
    )
  }
}
  

class Index extends React.Component {
  render() {
		return (
			<div>
				<BarNav />
				<Carousel />
				<Content />
				<Links />
				<Footer />
  		</div>
		)
	}
}

class About extends React.Component {
  render() {
		return (
			<div>
				About
  		</div>
		)
	}
}

class ProjectRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId : 0
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.setState({projectId: id})
  }

  render() {
    return (
			<div>
        <Project id={this.state.projectId} />
  		</div>
		)
	}
}