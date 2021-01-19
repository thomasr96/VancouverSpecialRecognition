 
package com.greglturnquist.payroll;

// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Value;
import java.util.HashMap;

@RestController  
public class GoogleAPIController {

    @Value("${GOOGLE_MAPS_API_KEY}")
    private String GOOGLE_MAPS_API_KEY;
    
	@RequestMapping(value = "/api-key") // <2>
	public HashMap<String, String> apiKey() {	 
		HashMap<String, String> map = new HashMap<>();
		map.put("key", GOOGLE_MAPS_API_KEY);		
		return map;
	}

}