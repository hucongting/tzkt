package com.cbt.entity;

/**
 *  用户角色实体类
 * @author soft01
 *  2018年6月4日  下午8:02:51
 */
public class UserRoles {
	
	private int rolesid;
	
	private int userid;
	
	private String rolesname;

	public int getRolesid() {
		return rolesid;
	}

	public void setRolesid(int rolesid) {
		this.rolesid = rolesid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getRolesname() {
		return rolesname;
	}

	public void setRolesname(String rolesname) {
		this.rolesname = rolesname;
	}

	@Override
	public String toString() {
		return "UserRoles [rolesid=" + rolesid + ", userid=" + userid + ", rolesname=" + rolesname + "]";
	}
	
	
}
