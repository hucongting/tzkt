package com.cbt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cbt.dao.UserRolesDao;
import com.cbt.entity.UserRoles;

/**
 *  用户角色控制器
 * @author soft01
 *  2018年6月4日  下午8:14:31
 */
@Controller
@RequestMapping("/roles")
public class UserRolesController {
	
	@Autowired
	private UserRolesDao UrolesDao;
	
	/**
	 * 测试查询角色
	 * @return
	 */
	@RequestMapping("/rolesname")
	public String findUserRolesByName() {
		UserRoles user_roles = UrolesDao.findUserRolesByName("hct");
		System.out.println(user_roles.getRolesname());
		return null;
	}
	
}
