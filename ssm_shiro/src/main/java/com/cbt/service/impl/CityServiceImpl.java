package com.cbt.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cbt.dao.CityDao;
import com.cbt.entity.City_PM;
import com.cbt.service.CityService;

/**
 * Service 层
 *  @作者 soft01
 * ssm_day01  CityServiceImpl.java
 *  2018年5月24日下午12:52:37
 */
@Service
public class CityServiceImpl implements CityService {

	@Resource
	CityDao citydao;
	
	public List<City_PM> queryCityList() {
		// TODO Auto-generated method stub
		return citydao.queryCityList();
	}

}
