package com.cbt.shiro.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.realm.AuthenticatingRealm;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import com.cbt.dao.UserDao;
import com.cbt.entity.User;

/**
 * 只是认证的话只要继承AuthenticationgRealm
 * @author soft01
 *
 */
public class Sha1Realm extends AuthenticatingRealm {

	@Autowired
	UserDao userdao;
	Object userpwd;
	/**
	 *  用户认证
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

		System.out.println("Sha1Realm------->");
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
    	String hashAlgorithmName = "SHA1";
    	int hashIterations = 1024;
    	return new SimpleHash(hashAlgorithmName, str, salt, hashIterations);
    }
	
	
}
