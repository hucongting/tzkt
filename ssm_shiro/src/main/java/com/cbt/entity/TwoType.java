package com.cbt.entity;

import java.io.Serializable;
import java.util.List;

/**
 *  课程二级分类
 * @author soft01
 *  2018年6月7日  下午4:37:45
 */
public class TwoType implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private int twotp_id;
	
	private String twotp_name;
	
	private String twotp_desc;
	
	private int onetp_id;

	private List<ThreeType> threetplist;
	

	public List<ThreeType> getThreetplist() {
		return threetplist;
	}



	public void setThreetplist(List<ThreeType> threetplist) {
		this.threetplist = threetplist;
	}



	public int getTwotp_id() {
		return twotp_id;
	}



	public void setTwotp_id(int twotp_id) {
		this.twotp_id = twotp_id;
	}



	public String getTwotp_name() {
		return twotp_name;
	}



	public void setTwotp_name(String twotp_name) {
		this.twotp_name = twotp_name;
	}



	public String getTwotp_desc() {
		return twotp_desc;
	}



	public void setTwotp_desc(String twotp_desc) {
		this.twotp_desc = twotp_desc;
	}



	public int getOnetp_id() {
		return onetp_id;
	}



	public void setOnetp_id(int onetp_id) {
		this.onetp_id = onetp_id;
	}



	@Override
	public String toString() {
		return "TwoType [twotp_id=" + twotp_id + ", twotp_name=" + twotp_name + ", twotp_desc=" + twotp_desc
				+ ", onetp_id=" + onetp_id + "]";
	}
	
}
