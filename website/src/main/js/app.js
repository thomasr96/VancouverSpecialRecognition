'use strict';


const React = require('react'); 
const ReactDOM = require('react-dom'); 
const client = require('./client'); 
const style = require("./../sass/main.scss");
// const About = require("./components/About");

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

import AboutSection from './components/AboutSection';
import HouseMapSection from './components/HouseMapSection';
import ExploreSection from './components/ExploreSection';
import vancouverSpecialImg from './../resources/images/vancouver_special.jpg'


class App extends React.Component { // <1>

	constructor(props) {
		super(props);
		this.state = {addresses: []};
	}

	componentDidMount() {
		let linkElement = document.createElement('link');
		linkElement.rel = 'icon';
		linkElement.type = 'image/png';
		linkElement.href = vancouverSpecialImg;

		document.getElementsByTagName('head')[0].appendChild(linkElement);
	}

	render() {
		return (
			<div id="home">

				<Navbar id="main-header" bg="dark" variant="dark" expand="lg">
					<Navbar.Brand className="nav-brand" href="#home">Vancouver Special</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">

						<Nav className="mr-auto nav-menu">
							<Nav.Link href="#home">Map</Nav.Link>
							<Nav.Link href="#abt-section">About</Nav.Link>
							<Nav.Link href="#explore-section">Try</Nav.Link>
						</Nav>
 
					</Navbar.Collapse>
				</Navbar>

				<HouseMapSection/>

				<AboutSection/>

				<ExploreSection/>
 
			</div>
		)
	}
}
 
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
 