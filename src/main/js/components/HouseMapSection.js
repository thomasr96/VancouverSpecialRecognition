import React, { Component} from 'react'
// import { Map, TileLayer, Marker, Popup, Circle, Rectangle, CircleMarker} from 'react-leaflet';
import { MapContainer, TileLayer, CircleMarker, Marker, Popup } from 'react-leaflet'
import Container from 'react-bootstrap/Container'
const client = require('./../client'); 



class HouseMap extends React.Component{

    constructor(props){
        super(props);
        this.state = { center: [49.240459, -123.023663], zoom: 11, addressList: []};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount(){
        
		client({method: 'GET', path: '/api/addresses'}).done(response => {
            
            const addrs = response.entity._embedded.addresses.map((addrObj) => [addrObj.latitude, addrObj.longitude]);
            
            this.setState({addressList: addrs});
		});
    }

    componentDidUpdate(){

    }

    renderMapMarkers(){
        return(
        this.state.addressList.map((address, i) =>
            {
            return(
            

                <CircleMarker key={i}   center={address} weight={1.5} radius={5}>
                    
                </CircleMarker>
                
                )
            }
        ))
    }

    render(){
        return(
            <MapContainer center={this.state.center} zoom={this.state.zoom} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.renderMapMarkers()}
            </MapContainer>
          
        )
    }
}


export default class HouseMapSection extends React.Component{

    constructor(props){
        super(props);
        this.state = { center: [49.240459, -123.023663], zoom: 11,
        addressList:undefined
    };

    }

    render(){
        return(
            <div id="map-section" className="vs-section">
          
                <HouseMap />
            </div>
        )
    }
}