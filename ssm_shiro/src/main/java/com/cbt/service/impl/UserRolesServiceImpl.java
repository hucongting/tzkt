package com.cbt.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cbt.dao.UserRolesDao;
import com.cbt.entity.UserRoles;
import com.cbt.service.UserRolesService;

/**
 *  用户角色Service层
 * @author soft01
 *  2018年6月4日  下午8:06:29
 */

@Service
public class UserRolesServiceImpl implements UserRolesService {

	@Resource
	UserRolesDao UrolesDao;
	
	@Override
	public UserRoles findUserRolesByName(String username) {
		// TODO Auto-generated method stub
		return UrolesDao.findUserRolesByName(username);
	}

}
