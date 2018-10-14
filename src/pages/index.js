import React from "react"
import '../styles/styles.css'
import MediaQuery from 'react-responsive'
import BarNav from '../frame/header/nav/BarNav'
import BurgerNav from '../frame/header/nav/BurgerNav'
import Content_Items from '../content/content_items.json'
import Carousel from '../content/Carousel'
import Content from '../content/Content'
import Headroom from 'react-headroom'
import Footer from '../frame/footer/Footer.js'
import Links from '../content/Links'

export default class Home extends React.Component {
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