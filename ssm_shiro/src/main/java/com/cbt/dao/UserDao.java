package com.cbt.dao;

import java.util.List;


import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.cbt.entity.User;

public interface UserDao extends BaseMapper<User> {
	
	List<User> queryUserList();
	
	User queryUserById(int userid);
	
	User queryUserByName(String username);
	
}
