package com.cbt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cbt.dao.UserDao;
import com.cbt.entity.User;

@Controller
public class UserController {
	
	@Autowired
	private UserDao userdao;
	
	@RequestMapping("/user")
	public String testUser() {
		List<User> userlist = userdao.queryUserList();
		System.out.println(userlist);
		return "user";
	}
	
	/**
	 * RESTful 返回JSON数据
	 * @param id
	 * @return
	 */
	@RequestMapping("/view/{id}")
	public @ResponseBody User viewUser(@PathVariable("id") int userid) {
		
		User userlist = userdao.queryUserById(userid);
		System.out.println(userlist);
		return userlist;
		
	}
	
	
	
	
}
