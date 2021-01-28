 package com.thomasretzloff.vancouverspecial.address;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

 
@Entity
@Table(name = "addresses")
public class Address {

	private @Id Long id; // <2>

	@Column(name = "latitude", nullable = false)
	private double latitude;
	@Column(name = "longitude", nullable = false)
	private double longitude;
	// private String address;

	private Address() {}

	public Address(double latitude, double longitude) {
		this.latitude = latitude;
		this.longitude = longitude;
    }
    
    // public Address(String address) {
	// 	this.address = address;
	// }



	@Override
	public int hashCode() {

		return Objects.hash(latitude, longitude);
	}
 
	public double getLatitude() {
		return latitude;
    }
    
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
    }
    
    // public String getAddress() {
    //     return address;
    // }

    // public void setAddress(String address) {
    //     this.address = address;
    // }

	// @Override
	// public String toString() {
	// 	return address;
	// }
}
// end::code[]
