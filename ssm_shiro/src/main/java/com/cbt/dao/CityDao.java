package com.cbt.dao;

import java.util.List;

import com.cbt.entity.City_PM;

/**
 * City Dao接口
 *  @作者 soft01
 * ssm_day01  CityDao.java
 *  2018年5月24日下午12:48:45
 */
public interface CityDao {
	List<City_PM> queryCityList();
}
