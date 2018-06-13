package com.cbt.shiro.realm;

import java.util.HashSet;
import java.util.Set;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import com.cbt.dao.UserDao;
import com.cbt.dao.UserRolesDao;
import com.cbt.entity.User;
import com.cbt.entity.UserRoles;

/**
 * 只是认证的话只要继承AuthenticationgRealm
 * @author soft01
 *
 */
public class MyRealm extends AuthorizingRealm {

	@Autowired
	UserDao userdao;
	
	@Autowired
	UserRolesDao UrolesDao;
	
	Object userpwd;
	/**
	 *  用户认证
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		System.out.println("MyRealm------------>");
		//将AuthenticationToken类型转成UsernamePasswordToken类型
		UsernamePasswordToken upToken = (UsernamePasswordToken) token;

		//获取要登陆的用户名
		String username = upToken.getUsername();
		
		User user = userdao.queryUserByName((String)username);
		
		if(user != null) {
			userpwd = user.getUserpwd();
		}
		
		Object principal =  username;	
		Object credentials = userpwd;
		String realmName = getName();
		
		//返回值实例化
		SimpleAuthenticationInfo info = new SimpleAuthenticationInfo(principal, credentials, realmName);
		return info;
	}


	//用来测试的算出密码password盐值加密后的结果，下面方法用于新增用户添加到数据库操作的，我这里就直接用main获得，直接数据库添加了，省时间
    public static void main(String[] args) {
    	Object obj = Md5_Pwd(null, "123456");
    	System.out.println(obj);
    }
	
    /**
       * 返回 盐值加密后的密码
     * @param str
     */
   public static Object Md5_Pwd(String salt,Object str) {
    	String hashAlgorithmName = "Md5";
    	int hashIterations = 1024;
    	return new SimpleHash(hashAlgorithmName, str, salt, hashIterations);
    }


   /**
    * 授权shiro 回调这个方法
    */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		// TODO Auto-generated method stub
		System.out.println("-------->doGetAuthorizationInfo角色授权...");
		//1. 从PrincipalCollection获取登陆用户信息
		 Object username = principals.getPrimaryPrincipal();
		//2. 利用登陆的用户信息来用户当前用户的角色或权限
		 UserRoles userroles = UrolesDao.findUserRolesByName((String)username);
		//3.创建SimpleAuthorizationInfo,设置reles属性
		 Set<String> roles = new HashSet<String>();
		 if(userroles.getRolesname().equals("admin")) {
			 roles.add(userroles.getRolesname());
		 }
		 if(userroles.getRolesname().equals("user")) {
			 roles.add(userroles.getRolesname());
		 }
		//4.返回SimpleAuthorizationInfo对象
		 SimpleAuthorizationInfo info = new SimpleAuthorizationInfo(roles);
		return info;
	}
	
	
}
