
package com.example.hello.helloSpringBoot;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@GetMapping("/")
	public Map<String, String> index() {
		HashMap<String, String> map = new HashMap<>();
		map.put("status", "up");
		return map;
	}
}
