/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.thomasretzloff.address;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

 
@Entity  
public class Address {

	private @Id @GeneratedValue Long id; // <2>
	private double latitude;
	private double longitude;
	private String address;

	private Address() {}

	public Address(double latitude, double longitude) {
		this.latitude = latitude;
		this.longitude = longitude;
    }
    
    public Address(String address) {
		this.address = address;
	}



	@Override
	public int hashCode() {

		return Objects.hash(latitude, longitude, address);
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
    
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

	@Override
	public String toString() {
		return address;
	}
}
// end::code[]
