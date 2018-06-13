package com.cbt.service;

import java.util.List;

import com.cbt.entity.User;

public interface UserService {
	List<User> queryUserList();
	User queryUserById(int id);
	User queryUserByName(String username);
}
