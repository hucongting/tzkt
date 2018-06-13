package com.cbt.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;

@TableName("user")
public class User extends Model<User> {

	private static final long serialVersionUID = 1L;

	@TableId("userid")
	private int userid;
	
	private String username;
	
	private String userpwd;
	
	
	public int getUserid() {
		return userid;
	}



	public void setUserid(int userid) {
		this.userid = userid;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getUserpwd() {
		return userpwd;
	}



	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}



	@Override
	protected Serializable pkVal() {
		// TODO Auto-generated method stub
		return this.userid;
	}



	@Override
	public String toString() {
		return "User [userid=" + userid + ", username=" + username + ", userpwd=" + userpwd + "]";
	}
	
	

}
