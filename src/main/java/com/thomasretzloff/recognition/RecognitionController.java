package com.thomasretzloff.recognition;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestParam;

 
@RestController // <1>
public class RecognitionController {
	// private final StorageService storageService;

	@RequestMapping("/recognition") // <2>
	public ResponseEntity<String> apiKey(@RequestParam("file") MultipartFile file) {

		LinkedMultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
		
		HttpStatus httpStatus = HttpStatus.CREATED;

// check if file is png, 
		if (!file.isEmpty()) {
			// System.out.println("Shbod");
			// System.out.println();
			map.add("image", file.getResource());
			map.add("output", file.getOriginalFilename());
		}
		
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

		String url = "http://localhost:5000/api/test";

		RestTemplate restTemplate = new RestTemplate();
		HttpEntity<LinkedMultiValueMap<String, Object>> requestEntity = new HttpEntity<>(map, headers);
		// String response;
        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);

		return response;
	}


}
 
