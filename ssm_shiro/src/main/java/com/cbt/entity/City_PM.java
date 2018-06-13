package com.cbt.entity;

/**
 * Ciyt_PM 实体类
 *  @作者 soft01
 * ssm_day01  City_PM.java
 *  2018年5月24日上午11:51:04
 */
public class City_PM {
	
	private String city_name;
	
	private Integer city_pm;

	public String getCity_name() {
		return city_name;
	}

	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}

	public Integer getCity_pm() {
		return city_pm;
	}

	public void setCity_pm(Integer city_pm) {
		this.city_pm = city_pm;
	}

	@Override
	public String toString() {
		return "City_PM [city_name=" + city_name + ", city_pm=" + city_pm + "]";
	}
	
	
}
