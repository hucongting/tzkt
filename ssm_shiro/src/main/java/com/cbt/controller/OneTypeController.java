package com.cbt.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.cbt.dao.OneTypeMapper;
import com.cbt.dao.ThreeTypeMapper;
import com.cbt.entity.OneType;
import com.cbt.entity.ThreeType;

/**
 * @author soft01
 *  2018年6月7日  下午8:02:36
 */
@Controller
@RequestMapping("/onetype")
public class OneTypeController {
	
	@Autowired
	OneTypeMapper onetypeDao;
	
	@Autowired
	ThreeTypeMapper threetpDao;
	
	@RequestMapping("/typelist")
	public String oneTypeList(HttpSession session) {
		List<OneType> list = onetypeDao.SelCourseTypeList();
		System.out.println(list);
		session.setAttribute("type_list", list);
		return "redirect:/home/index.jsp";
	}
	
}
