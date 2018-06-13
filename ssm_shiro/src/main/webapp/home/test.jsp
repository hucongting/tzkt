<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/style/city.css"> 
<title>城市列表</title>
</head>
<body>
	<table class="table_city">
	<c:forEach items="${city_list }" var="city">
		<tr class="tr_city">
			<td>${city.city_name }</td>
			<td>${city.city_pm }</td>
		</tr>
	</c:forEach>
	</table>
</body>
</html>