package com.cbt.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {

	@RequestMapping("/index")
	public String Home(HttpSession session) {
		System.out.println("------>主页");
		
		return "index";
	}
	
}
