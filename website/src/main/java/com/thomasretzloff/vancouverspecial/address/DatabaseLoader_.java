//  package com.thomasretzloff.vancouverspecial.address;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.stereotype.Component;

// /**
//  * @author Greg Turnquist
//  */
// // tag::code[]
// @Component // <1>
// public class DatabaseLoader implements CommandLineRunner { // <2>

// 	private final AddressRepository repository;

// 	private double[][] addressList = new double[][] {{49.2112721, -122.9953815}, {49.2474861, -122.9855298}, {49.2828401, -122.9854361}, {49.2700475, -122.9626943}, {49.250619799999996, -122.9456095}, {49.209678499999995, -122.98667009999998}, {49.2367674, -123.0178727}, {49.2535283, -122.9295277}, {49.2167752, -122.98970870000001}, {49.2769098, -123.0219764}};

// 	@Autowired // <3>
// 	public DatabaseLoader(AddressRepository repository) {
// 		this.repository = repository;
// 	}

// 	// @Override
// 	// public void run(String... strings) throws Exception { // <4>
// 	// 	for(int i=0; i < addressList.length; i++){
// 	// 		this.repository.save(new Address(addressList[i][0], addressList[i][1]));
// 	// 	}
// 	// }
// }
// // end::code[]
