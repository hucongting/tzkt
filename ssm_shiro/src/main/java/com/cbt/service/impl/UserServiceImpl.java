package com.cbt.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import com.cbt.dao.UserDao;
import com.cbt.entity.User;
import com.cbt.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Resource
	private UserDao userdao;
	
	public List<User> queryUserList() {
		// TODO Auto-generated method stub
		return userdao.queryUserList();
	}

	public User queryUserById(int id) {
		// TODO Auto-generated method stub
		return userdao.queryUserById(id);
	}

	public User queryUserByName(String username) {
		// TODO Auto-generated method stub
		return userdao.queryUserByName(username);
	}


}
