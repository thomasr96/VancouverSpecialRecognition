const React = require('react'); 

import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

export default class RecognitionModal extends React.Component {

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