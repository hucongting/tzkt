<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ShiroTest</title>
</head>
<body>
	<h3>Shiro test page</h3>
	<a href="${pageContext.request.contextPath }/login/logout">LogOut  </a>
	UserName: 
	<shiro:principal />
	UserRoles:
	<shiro:hasRole name="admin">admin</shiro:hasRole>
	<shiro:hasRole name="user">user</shiro:hasRole>
	<br><br>
	<a href="${pageContext.request.contextPath}/home/admin.jsp">admin page</a><br><br>
	<a href="${pageContext.request.contextPath}/home/user.jsp">user page</a><br><br>
</body>
</html>