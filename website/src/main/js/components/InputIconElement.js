const React = require('react'); 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons';
import Tooltip from 'react-bootstrap/Tooltip';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class InputIconElement extends React.Component {

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