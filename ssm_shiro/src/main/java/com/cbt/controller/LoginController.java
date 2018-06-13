package com.cbt.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cbt.entity.User;

/**
 *shiro登陆验证
 *
*/
@Controller
@RequestMapping("/login")
public class LoginController {
	
	/**
	 * Shiro 用户认证
	 * @param request
	 * @return
	 */
	@RequestMapping("/submit")
	public String login(HttpServletRequest request,User user) {
		System.out.println(user.getUsername()+"----"+user.getUserpwd());
		Subject subject = SecurityUtils.getSubject();
		
		Session session =  subject.getSession();
		System.out.println(session.getTimeout()); 
		
		if(!subject.isAuthenticated()) {
			//把用户名密码封装为UsernamePasswordToken对象
			UsernamePasswordToken passwordToken = new UsernamePasswordToken(user.getUsername(),user.getUserpwd());
			request.setAttribute("auth_name", passwordToken.getPrincipal());
			passwordToken.setRememberMe(true);

			try {
				//执行登陆	
				subject.login(passwordToken);
				return "redirect:/home/index.jsp";
			}catch(IncorrectCredentialsException ice) {
				System.out.println(ice.getMessage()+"密码匹配失败");
				return "login";
			}catch(UnknownAccountException uae) {
				System.out.println(uae.getMessage()+"--->不存在");
				return "login";
			}catch(AuthenticationException ae) {
				//所有认证异常的父类
				System.out.println("登陆失败"+ae.getMessage());
				return "login";
			}
		}
		return "shiro-test";
	}
	
	
	@RequestMapping("/test")
	public String test() {
		System.out.println("test--->??????");
		return "shiro-test";
	}
	
}
