const React = require('react'); 
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faArrowUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import GoogleAutocompleteSearch from './GoogleAutocompleteSearch'

const ExploreMainText = function(){
    return(<Container>
        <Row id="explore-primary-text">
            <Col >
                <h1 className="explore-text-center">
                    Have a Vancouver Special?
                </h1>
            </Col>
        </Row>

        <Row id="explore-secondary-row">
            <Col className="explore-text-center">
                <h3>
                    Enter an address or upload an image to find out!
                </h3>
            </Col>
        </Row>
    
    </Container>)
}

class InputIcon extends React.Component {

    constructor(props){
        super(props)
        this.state = {};
        this.componentDidMount.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
    }

    onUploadClick(e){
        this.state.fileInput.click();
    }

    onFileSelect(inputElement){ 
        this.props.setFile(inputElement.files[0]);
    }

    componentDidMount() {
        const fileInput = document.getElementById("input-file");

        this.setState({fileInput:fileInput});

        
    }
 
    renderTooltip(props){
        return(
        <Tooltip  id="button-tooltip" {...props}>
            Upload an image
        </Tooltip>);
    }

    render(){
        return(
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 300 }}
                overlay={this.renderTooltip}
            >
                <div id="submit-icon-container">
                    <Form.Group className="d-none">
                        <Form.File id="input-file" onChange={(e) => this.onFileSelect(e.target)} label="" accept=".png,.jpg,.jpeg"/>
                    </Form.Group>
        
                    <Button onClick={this.onUploadClick.bind(this)} id="upload-file-button" className="icon-button" variant="primary">
                        <FontAwesomeIcon id="upload-file-icon" icon={faUpload} />
                    </Button>
                </div>
            </OverlayTrigger>
        );
    }
}

export default class ExploreSection extends React.Component {

    constructor(props) {
		super(props);
        this.state = {fileMessage: "", inputAddress: null, file: null};

        this.setFileMessage = this.setFileMessage.bind(this);
        this.setFile = this.setFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddressInput = this.handleAddressInput.bind(this)
    }
    
    setFileMessage(message) {
        this.setState({fileMessage: message})
    }

    setFile(file){ 

        if(file == null) {
            this.setFileMessage("");
        } else{
            this.setFileMessage(this.renderFileMessage(file.name));
        }

        this.setState({file:file});
    }

    renderFileMessage(message) {
        return(
            <span>
                   <strong>File:</strong> {message}
                <Button className="icon-button" onClick={()=>this.setFile(null)} variant="primary">
                    <FontAwesomeIcon className="close-icon" icon={faTimesCircle} />
                </Button>                
            </span>
        );
    }

    handleSubmit() {
        console.log(this.state.file);
        console.log(this.state.inputAddress);
        function isEmpty(str){
            return(!str || str.trim().length === 0)
        }

        if (this.state.file == null && isEmpty(this.state.inputAddress)){
            alert('Please enter an address or upload an image.')
            return;
        }

        
    }

    handleAddressInput(e) {
        if(typeof(e) == "string") {
            this.setState({inputAddress: e})
        }else{
            this.setState({inputAddress: e.target.value})
        }
        
    }

    render(){
        return(
            
            
          <div id="explore-section" className='text-dark vs-section'>
            
            <ExploreMainText />

            <Container id='recognition-container'>
                <Form id="recognition-form" inline>
                    <div>
                        <div className="d-inline-flex input-well">
                            
                            <GoogleAutocompleteSearch handleAddressInput={this.handleAddressInput}/>
                            
                            <InputIcon setFile={this.setFile} />
                        </div>
                        <p id="input-message-container">
                            {this.state.fileMessage}
                        </p>

                    </div>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    
                </Form>
      
            </Container>
          </div>
			
        );
    }
}