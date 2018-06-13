package com.cbt.entity;

import java.io.Serializable;
import java.util.List;

/**
 *  课程一级分类
 * @author soft01
 *  2018年6月7日  下午4:36:27
 */
public class OneType implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private int onetp_id;
	
	private String onetp_name;
	
	private String onetp_desc;
	
	private List<TwoType> twotplist;
	
	public List<TwoType> getTwotplist() {
		return twotplist;
	}

	public void setTwotplist(List<TwoType> twotplist) {
		this.twotplist = twotplist;
	}

	public int getOnetp_id() {
		return onetp_id;
	}

	public void setOnetp_id(int onetp_id) {
		this.onetp_id = onetp_id;
	}

	public String getOnetp_name() {
		return onetp_name;
	}

	public void setOnetp_name(String onetp_name) {
		this.onetp_name = onetp_name;
	}

	public String getOnetp_desc() {
		return onetp_desc;
	}

	public void setOnetp_desc(String onetp_desc) {
		this.onetp_desc = onetp_desc;
	}

	@Override
	public String toString() {
		return "OneType [onetp_id=" + onetp_id + ", onetp_name=" + onetp_name + ", onetp_desc=" + onetp_desc + "]";
	}
	
}
