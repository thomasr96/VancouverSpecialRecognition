const React = require('react'); 

import GoogleAutocompleteSearch from './GoogleAutocompleteSearch';
import InputIconElement from './InputIconElement';

export default class AddressContainer extends React.Component {

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