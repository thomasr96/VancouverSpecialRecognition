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
                  
                    {/* Bacon ipsum dolor amet buffalo bresaola chislic shoulder. Strip steak swine ham hock bacon, ham cow venison salami. Alcatra meatloaf picanha, short ribs meatball pork chop jerky spare ribs beef pork frankfurter fatback tongue. Andouille spare ribs jowl cupim. Jerky shank meatball, frankfurter chuck filet mignon chislic kevin. Strip steak biltong leberkas, chicken jerky salami tongue buffalo pork short loin burgdoggen tail. Shankle pork chop pork loin kielbasa kevin. Swine ball tip turducken pig. Sirloin leberkas ground round kevin jowl filet mignon salami bresaola ball tip pork. Cupim shankle pastrami hamburger. Bresaola jerky pork belly ground round flank beef kielbasa, spare ribs pastrami cow chislic venison alcatra short ribs. Pork chop doner biltong filet mignon pork loin swine strip steak picanha tenderloin shankle porchetta ham hock. Shankle buffalo frankfurter, pork belly tail salami prosciutto short ribs chicken tongue kielbasa drumstick tri-tip. */}
                    <p>
                      This website displays my work from my final Master's project at Simon Fraser University. 
                      The Vancouver Special is an iconic, vintage house style found in the Vancouver Metro area. 
                      The Vancouver Special house style is one characterized by a two-story, box-like appearance, shallow roof, and generally with a balcony on the top level. 
                      They were first built as an affordable and practical housing solution in the 1960s through the 1980s. 
                      With thousands of these houses built, they soon lost popularity for their common appearance - leading to the reversal of zoning laws that once encouraged their construction. 
                      A more detailed history and analysis behind the saga that is the Vancouver Special's rise and fall in popularity 
                      <a href="https://open.library.ubc.ca/cIRcle/collections/ubctheses/831/items/1.0086386" target="_blank" rel="noopener noreferrer"> can be found here</a>.
                    </p>
                    <p>
                      Efforts have been taken to record locations of the Vancouver Specials and in this project I trained and applied artifical neural networks to automatically discover locations in the Burnaby, BC Civic area.
                      To view source code and a formal report for the project, see <a href="https://github.com/thomasr96/VancouverSpecialRecognition" target="_blank" rel="noopener noreferrer">my Github repository</a>.
                      The <a href="#home">map section</a> displays coordinate locations of Vancouver Specials while the <a href="#explore-section">exploration section</a> allows you to try out the YoloV3 algorithm yourself!
                    </p>
                    
                    
                </Col>

                <Col lg className="d-flex justify-content-center">
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