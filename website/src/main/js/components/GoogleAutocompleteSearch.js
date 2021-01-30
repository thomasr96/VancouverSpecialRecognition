const React = require('react'); 
import Form from 'react-bootstrap/Form'
 
const client = require('./../client'); 

export default class GoogleAutocompleteSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {key: undefined};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.initAutocomplete = this.initAutocomplete.bind(this);
        this.placeChanged = this.placeChanged.bind(this);
    }

    componentDidMount() {

        client({method: 'GET', path: '/api-key'}).done(response => {
            this.setState({key: response.entity.key})
            
            const script = document.createElement('script');
            script.type = 'text/javascript';
            
            script.src = `https://maps.googleapis.com/maps/api/js?key=` + this.state.key + `&libraries=geometry,places`;
            script.id = 'googleMaps';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.addEventListener('load', e => {
                this.initAutocomplete()
            });
        });
    }

    initAutocomplete() {
     
        let autocomplete = new google.maps.places.Autocomplete(
          document.getElementById("autocomplete"),
          { types: ["address"] }
        );

        // autocomplete.setFields(["address_component"]);
        autocomplete.setFields(["formatted_address"]);

        autocomplete.addListener("place_changed", this.placeChanged);

        this.setState({autocomplete:autocomplete});
      }

      placeChanged() {
        const place = this.state.autocomplete.getPlace();
        this.props.handleAddressInput(place.formatted_address)
      }

    render(){
        return(
            <div id="locationField">
                <Form.Group id="input-address">
                    <Form.Control id="autocomplete" onChange={this.props.handleAddressInput} type="text" placeholder="Enter an address" />
                </Form.Group>
            </div>
        );
    }
}
 