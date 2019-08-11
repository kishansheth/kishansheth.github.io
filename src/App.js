import React from "react"
import './styles/styles.css'
import MediaQuery from 'react-responsive'
import Nav from './frame/header/nav/Nav'
import BarNav from './frame/header/nav/BarNav'
import BurgerNav from './frame/header/nav/BurgerNav'
import Content_Items from './content/content_items.json'
import Content_Dictionary from './content/content_dictionary.json'
import Carousel from './content/Carousel'
import TickerDiv from './content/TickerDiv'
import Content from './content/Content'
import Footer from './frame/footer/Footer.js'
import Links from './content/Links'
import AboutPage from './pages/about/AboutPage'
import ProjectPage from './content/ProjectPage'
import MapPage from './pages/about/MapPage'
import BottomBanner from './content/BottomBanner'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { HashRouter } from 'react-router-dom'

// pages
import Gallery from './pages/gallery.js'

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" component={Index} exact />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/projects/:id" component={ProjectRouter}/>
        </div>
      </HashRouter>
    )
  }
}
  

class Index extends React.Component {
  render() {
		return (
			<div>
				<Nav />
				<TickerDiv />
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
				<Nav />
        <AboutPage />
  		</div>
		)
	}
}

class ProjectRouter extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params
    this.state = {
      projectId : id
    }
  }

  componentDidMount() {
    // const { id } = this.props.match.params
    // this.setState({projectId: id})
  }

  render() {
    return (
			<div>
        <ProjectPage id={this.state.projectId} />
  		</div>
		)
	}
}