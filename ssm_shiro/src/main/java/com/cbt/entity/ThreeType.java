package com.cbt.entity;

import java.io.Serializable;

/**
 *  课程三级分类
 * @author soft01
 *  2018年6月7日  下午4:39:09
 */
public class ThreeType implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private int threetp_id;
	
	private String threetp_name;
	
	private String threetp_desc;
	
	private int onetp_id;
	
	private int twotp_id;

	public int getThreetp_id() {
		return threetp_id;
	}

	public void setThreetp_id(int threetp_id) {
		this.threetp_id = threetp_id;
	}

	public String getThreetp_name() {
		return threetp_name;
	}

	public void setThreetp_name(String threetp_name) {
		this.threetp_name = threetp_name;
	}

	public String getThreetp_desc() {
		return threetp_desc;
	}

	public void setThreetp_desc(String threetp_desc) {
		this.threetp_desc = threetp_desc;
	}

	public int getOnetp_id() {
		return onetp_id;
	}

	public void setOnetp_id(int onetp_id) {
		this.onetp_id = onetp_id;
	}

	public int getTwotp_id() {
		return twotp_id;
	}

	public void setTwotp_id(int twotp_id) {
		this.twotp_id = twotp_id;
	}

	@Override
	public String toString() {
		return "ThreeType [threetp_id=" + threetp_id + ", threetp_name=" + threetp_name + ", threetp_desc="
				+ threetp_desc + ", onetp_id=" + onetp_id + ", twotp_id=" + twotp_id + "]";
	}
}
