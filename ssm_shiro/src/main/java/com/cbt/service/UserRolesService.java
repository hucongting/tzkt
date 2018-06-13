package com.cbt.service;

import com.cbt.entity.UserRoles;

/**
 *  用户角色Service接口
 * @author soft01
 *  2018年6月4日  下午8:05:27
 */
public interface UserRolesService {
	//根据用户名查出角色
	UserRoles findUserRolesByName(String username);
}
