package com.cbt.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cbt.dao.OneTypeMapper;
import com.cbt.entity.OneType;
import com.cbt.service.OneTypeService;

/**
 * @author soft01
 *  2018年6月7日  下午8:01:59
 */
@Service
public class OneTypeServiceImpl implements OneTypeService {

	@Resource
	OneTypeMapper onetypeDao;

	@Override
	public List<OneType> SelCourseTypeList() {
		// TODO Auto-generated method stub
		return onetypeDao.SelCourseTypeList();
	}

	
}
