package com.cbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/shiro")
public class TestShiro {
	@RequestMapping("/login")
	public String test() {
		System.out.println("login.jsp");
		return "login";
	}
	
	@RequestMapping("/test")
	public String test2() {
		System.out.println("shiro-test.jsp");
		return "shiro-test";
	}
		
	
}
