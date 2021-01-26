package com.thomasretzloff.vancouverspecial.payroll;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Controller // <1>
public class HomeController {

	@RequestMapping(value = "/") // <2>
	public String index() {
		return "index"; // <3>
	}

}
// end::code[]
