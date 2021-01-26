const React = require('react'); 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'

import vancouverSpecialImg from './../../resources/images/vancouver_special.jpg'

export default class AboutSection extends React.Component {

    constructor(props) {
		super(props);
		this.state = {employees: []};
    }
    
    render(){
        return(
            
          <div id="abt-section" className='text-light vs-section'>
            <Container>
              <h2 >
                About
              </h2>
      
              <Row>
                <Col lg>
                  
                    Bacon ipsum dolor amet buffalo bresaola chislic shoulder. Strip steak swine ham hock bacon, ham cow venison salami. Alcatra meatloaf picanha, short ribs meatball pork chop jerky spare ribs beef pork frankfurter fatback tongue. Andouille spare ribs jowl cupim. Jerky shank meatball, frankfurter chuck filet mignon chislic kevin. Strip steak biltong leberkas, chicken jerky salami tongue buffalo pork short loin burgdoggen tail. Shankle pork chop pork loin kielbasa kevin. Swine ball tip turducken pig. Sirloin leberkas ground round kevin jowl filet mignon salami bresaola ball tip pork. Cupim shankle pastrami hamburger. Bresaola jerky pork belly ground round flank beef kielbasa, spare ribs pastrami cow chislic venison alcatra short ribs. Pork chop doner biltong filet mignon pork loin swine strip steak picanha tenderloin shankle porchetta ham hock. Shankle buffalo frankfurter, pork belly tail salami prosciutto short ribs chicken tongue kielbasa drumstick tri-tip.
                
                </Col>

                <Col lg>
                  <Figure>
                    <Figure.Image id="vs-image" src={vancouverSpecialImg} rounded />

                    <Figure.Caption>
                      Photo by <a href="https://www.flickr.com/photos/jmv/41504570/in/photostream/" target="_blank" rel="noopener noreferrer">jmv</a> from Flickr.
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>
            </Container>
          </div>
			
        );
    }
}