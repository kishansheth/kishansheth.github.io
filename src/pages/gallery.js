import React from "react"
import '../styles/styles.css'
import MediaQuery from 'react-responsive'
import Nav from '../frame/header/nav/Nav'
import BarNav from '../frame/header/nav/BarNav'
import BurgerNav from '../frame/header/nav/BurgerNav'
import Carousel from '../content/Carousel'
import Panels from '../content/Panels'
import KeyPressTest from '../content/KeyPressTest'
import BottomBanner from '../content/BottomBanner'

export default class Gallery extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Panels />				
       			{/* <BottomBanner message="Site construction in progress. Please check back soon for more content."/> */}
  			</div>
		)
	}
	
	

}


