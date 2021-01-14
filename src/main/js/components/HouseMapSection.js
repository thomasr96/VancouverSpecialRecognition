import React, { Component} from 'react'
// import { Map, TileLayer, Marker, Popup, Circle, Rectangle, CircleMarker} from 'react-leaflet';
import { MapContainer, TileLayer, CircleMarker, Marker, Popup } from 'react-leaflet'
import Container from 'react-bootstrap/Container'
const client = require('./../client'); 



class HouseMap extends React.Component{

    constructor(props){
        super(props);
        this.state = { center: [49.240459, -123.023663], zoom: 11, addressList: []};
        // addressList:[[49.2112721, -122.9953815], [49.2474861, -122.9855298], [49.2828401, -122.9854361], [49.2700475, -122.9626943], [49.250619799999996, -122.9456095], [49.209678499999995, -122.98667009999998], [49.2367674, -123.0178727], [49.2535283, -122.9295277], [49.2167752, -122.98970870000001], [49.2769098, -123.0219764]]
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount(){
        
		client({method: 'GET', path: '/api/addresses'}).done(response => {
            
            const addrs = response.entity._embedded.addresses.map((addrObj) => [addrObj.latitude, addrObj.longitude]);
            console.log(response)
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
        addressList:[[49.2112721, -122.9953815], [49.2474861, -122.9855298], [49.2828401, -122.9854361], [49.2700475, -122.9626943], [49.250619799999996, -122.9456095], [49.209678499999995, -122.98667009999998], [49.2367674, -123.0178727], [49.2535283, -122.9295277], [49.2167752, -122.98970870000001], [49.2769098, -123.0219764]]};

    }

    render(){
        return(
            <div id="map-section" className="vs-section">
          
                <HouseMap />
            </div>
        )
    }
}