package com.thomasretzloff.vancouverspecial.address;
 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
public interface AddressRepository extends CrudRepository<Address, Long> {
    


}


