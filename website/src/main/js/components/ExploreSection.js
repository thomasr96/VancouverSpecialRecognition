const React = require('react'); 

const client = require('./../client'); 

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faArrowUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'

import GoogleAutocompleteSearch from './GoogleAutocompleteSearch'
import vancouverSpecialImg from './../../resources/images/vancouver_special.jpg'


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

class RecognitionModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {};
    }

    render(){
        return(

            <Modal
                show={this.props.show}
                size="lg"
                onHide={this.props.onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="recognition-modal"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.titleMessage}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Container id='recognition-result-container'>
                        <div id="scanner-container">
                            <Image id="recognition-result" className="recognition-result" src={this.props.displayImage} rounded />
                            {this.props.showScannerBar ? <div className="bar-scanner"></div> : null}
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
            
        );
    }
}

class AddressContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {};
    }

    render(){
        return(

            <div>
                <div className="d-inline-flex input-well">
                    
                    <GoogleAutocompleteSearch apiKey={this.props.apiKey} handleAddressInput={this.props.handleAddressInput}/>
                    
                    <InputIconElement setFile={this.props.setFile} />
                </div>
                <p className="flex-left">
                    {this.props.fileMessage}
                </p>

            </div>
            
        );
    }
}

class InputIconElement extends React.Component {

    constructor(props){
        super(props)
        this.state = {fileSizeKB: 500};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
        this.onUploadClick = this.onUploadClick.bind(this);
    }

    onUploadClick(e){
        this.state.fileInput.click();
    }
    checkFileSize(files) {
        if(files && files.length == 1)
        {       
            
            if (files[0].size > this.state.fileSizeKB * 1000) 
            {
                return false;
            }
        }

        return true;
        
        
    }

    onFileSelect(inputElement){ 

        // if(file)
        if(this.checkFileSize(inputElement.files)){
            this.props.setFile(inputElement.files[0]);
        }else{
            alert('File size must be less than ' + this.state.fileSizeKB + 'KB.')
        }
    }

    componentDidMount() {
        const fileInput = document.getElementById("input-file");
        // fileInput.addEventListener('change', (e) => this.onFileSelect(e.target));
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
                        <Form.File id="input-file" onClick={(e) => e.target.value=null} onChange={(e) => this.onFileSelect(e.target)} label="" accept=".png,.jpg,.jpeg,.jfif"/>
                    </Form.Group>
        
                    <Button onClick={this.onUploadClick} id="upload-file-button" className="icon-button" variant="primary">
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
        this.state = {fileMessage: "", showScannerBar: false, inputAddress: null, 
                        file: null, displayImage: false, recognitionModalIsOpen: false,
                        recognitionModalTitleMessage: "Performing Recognition...", apiKey: undefined
                    };

        this.setFileMessage = this.setFileMessage.bind(this);
        this.setFile = this.setFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddressInput = this.handleAddressInput.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleRecognitionResponse = this.handleRecognitionResponse.bind(this);
    }   
    
    componentDidMount(){
		client({method: 'GET', path: '/api-key'}).done(response => {
            this.setState({apiKey: response.entity.key})
            
        });
    }
    
    setFileMessage(message) {
        this.setState({fileMessage: message});
    }

    setFile(file){ 
  
        if(file == null) {
            this.setFileMessage(" ");
        } else{
            this.setFileMessage(this.renderFileMessage(file.name));
        }

        this.setState({file:file});
    }

    renderFileMessage(message) {
        return(
            <span id="input-message-container">
                   <strong>File:</strong> <span id="input-message">{message}</span>
                <Button className="icon-button" onClick={()=>this.setFile(null)} variant="primary">
                    <FontAwesomeIcon className="close-icon" icon={faTimesCircle} />
                </Button>                
            </span>
        );
    }

    handleSubmit(e) {
        let that = this;
        // let form;

        e.preventDefault();
        e.stopPropagation(); 
        function isEmpty(str){
            return(!str || str.trim().length === 0)
        }
        
        if (this.state.file !== null){
            this.setState({recognitionModalIsOpen: true, recognitionModalTitleMessage: "Performing Recognition...", displayImage: URL.createObjectURL(this.state.file), showScannerBar: true});

            let form = new FormData();
            form.append('file', this.state.file);
            that.makeRecognitionRequest(form);
            
        }else if (!isEmpty(this.state.inputAddress)){
            
            // const location = '991 Everett Crescent, Burnaby, British Columbia';
            let location = this.state.inputAddress;
            
            let theUrl = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location="+location + "&key="+ this.state.apiKey ;
            
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.responseType = 'blob';
            xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
            xmlHttp.send( null );
            xmlHttp.onreadystatechange = function (){
 
                var outputImg = document.createElement('img');
 
                    outputImg.src = window.URL.createObjectURL(xmlHttp.response)
                    let blob = xmlHttp.response;
                   
                that.setState({file:blob, recognitionModalIsOpen: true, recognitionModalTitleMessage: "Performing Recognition...", displayImage: URL.createObjectURL(blob), showScannerBar: true});

                let form = new FormData();
                form.append('file', blob);
                
                that.makeRecognitionRequest(form);

            }
        } else{
            alert('Please enter an address or upload an image.')
            return;
        }
        
    }

    resetModal() {
        this.setState({recognitionModalIsOpen:false});
    }

    handleServerError(response) {
        alert(response.entity);
    }

    handleUploadError(response) {
        this.resetModal();
        this.handleServerError(response);
        this.setFile(null);
    }

    makeRecognitionRequest(form) {
        let that = this;
        const startRecognitionTime = performance.now();
        
        client({method: 'POST', path: '/recognition', entity: form, headers: {
            'Content-Type': 'multipart/form-data'
        }}).done(response => {
            
            // make sure the scanner runs for a bit :)
            const elapsedTimeWithDiff = 2500 - (performance.now() - startRecognitionTime);
            
            if(elapsedTimeWithDiff > 0) {
                
                var myInterval = setInterval(function(){
                    clearInterval(myInterval);
                    that.handleRecognitionResponse(response);
                    }, elapsedTimeWithDiff);

            }else{
                
                that.handleRecognitionResponse(response);
            }

        }, 
        (response) => that.handleUploadError(response));
    }

    handleRecognitionResponse(response) {
        if (response.entity == 'NONE_FOUND'){
            this.setState({showScannerBar: false, 
                recognitionModalTitleMessage: "No Vancouer Specials detected..."});
        }else{
 
            const dispayText = (response.entity.instanceCount > 1) 
                                ? 'Found ' + response.entity.instanceCount + ' Vancouver Specials!'
                                : 'Found a Vancouver Special!';
            this.setState({showScannerBar: false, 
                recognitionModalTitleMessage: dispayText,
                displayImage : 'data:image/png;base64,'+response.entity.image});
        }
    }

    closeRecognitionModal(){
        this.setState({recognitionModalIsOpen: false});
        this.setFile(null);
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
                    
                    <AddressContainer apiKey={this.state.apiKey} handleAddressInput={this.handleAddressInput} setFile={this.setFile} fileMessage={this.state.fileMessage}/>
                    
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    
                </Form>
      
            </Container>

            <RecognitionModal displayImage={this.state.displayImage} show={this.state.recognitionModalIsOpen} 
            onHide={() => this.closeRecognitionModal()} showScannerBar={this.state.showScannerBar}
            titleMessage={this.state.recognitionModalTitleMessage}  
            />
            
          </div>
			
        );
    }
}