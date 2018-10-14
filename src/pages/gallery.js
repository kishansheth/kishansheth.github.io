import React from "react"
import '../styles/styles.css'
import MediaQuery from 'react-responsive'
import BarNav from '../frame/header/nav/BarNav'
import BurgerNav from '../frame/header/nav/BurgerNav'
import Carousel from '../content/Carousel'
import Panels from '../content/Panels'
import KeyPressTest from '../content/KeyPressTest'

export default class Gallery extends React.Component {
	render() {
		return (
			<div>
				<BarNav />
				<Panels />
				<KeyPressTest />
  			</div>
		)
	}
	
	

}


