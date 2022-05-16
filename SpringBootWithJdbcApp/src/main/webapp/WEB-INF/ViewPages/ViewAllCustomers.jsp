<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page  isELIgnored="false" %>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer Info</title>
</head>
<body>
<h1 style="text-align:center">All Customers info</h1>
<hr />
<table width="100%" border=1>
<tr>
<td>Customer ID</td>
<td>Customer Name</td>
<td>Gender</td>
<td>Location</td>
<td>Email</td>
<td>Password</td>
</tr>
<c:forEach items="${allcus}" var="cus">
<tr>
<td>${cus.cusid }</td>
<td>${cus.cusname }</td>
<td>${cus.gender }</td>
<td>${cus.location }</td>
<td>${cus.email }</td>
<td>${cus.pasword }</td>
</tr>
</c:forEach>
</table>
</body>
</html>