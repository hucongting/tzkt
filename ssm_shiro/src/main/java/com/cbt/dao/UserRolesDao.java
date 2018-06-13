package com.cbt.dao;

import com.cbt.entity.UserRoles;

/**
 *  用户角色Dao层
 * @author soft01
 *  2018年6月4日  下午8:04:30
 */
public interface UserRolesDao {
	
	//根据用户名查出角色
	UserRoles findUserRolesByName(String username);
	
}
