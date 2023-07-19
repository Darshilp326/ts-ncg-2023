package com.analysis.ts.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.analysis.ts.entity.View;
import com.analysis.ts.services.MyService;

@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	private MyService service;
	
	@GetMapping("/home")
	public String home() {
		return "This is home page";
	}
	
	@GetMapping("/views")
	public ResponseEntity<?> getViews() {
		try {
			List<View> list = this.service.getViews();
			return ResponseEntity.status(200).body(list);
		}
		catch(Exception e){
			return ResponseEntity.status(500).body("Internal server error");
		}
		
	}

	@GetMapping("/views/{viewId}")
	public Optional<View> getViewById(@PathVariable String viewId) {
		return this.service.getViewById(Long.parseLong(viewId));
	}
	
	@PostMapping("/views")
	public View addViews(@RequestBody View view) {
		return this.service.addView(view);
	}
	
	@DeleteMapping("/views/{viewId}")
	public ResponseEntity<?> deleteView(@PathVariable String viewId) {
		this.service.deleteView(Long.parseLong(viewId));
		return ResponseEntity.status(200).body("Successfully deleted");

	}
	
}
