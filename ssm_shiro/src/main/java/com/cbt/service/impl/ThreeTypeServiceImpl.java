package com.cbt.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cbt.dao.ThreeTypeMapper;
import com.cbt.entity.ThreeType;
import com.cbt.service.ThreeTypeService;

@Service
public class ThreeTypeServiceImpl implements ThreeTypeService {

	@Resource
	ThreeTypeMapper threetpDao;
	
	@Override
	public List<ThreeType> SelCourseThreeTypeList() {
		// TODO Auto-generated method stub
		return threetpDao.SelCourseThreeTypeList();
	}

}
