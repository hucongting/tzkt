package com.cbt.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cbt.entity.City_PM;
import com.cbt.service.CityService;

/**
 * City控制器
 *  @作者 soft01
 * ssm_day01  CityController.java
 *  2018年5月24日上午10:43:09
 */
@Controller
public class CityController {
	
	@Autowired
	private CityService cityservice;
	
	@RequestMapping("test")
	public String test(HttpSession session) {
		System.out.println("test.do");
		
		List<City_PM> city_list = cityservice.queryCityList();
		session.setAttribute("city_list", city_list);
		return "test";
	}
	
}
