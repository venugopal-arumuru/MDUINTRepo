<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ page  isELIgnored="false" %>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Search Customer</title>
</head>
<body>
<h1 style="text-align:center">Search Customer</h1>
<hr />
<form name="f1"  method="POST"  action="SearchProcess">
<table width="100%">
<tr>
<td style="text-align:center">
Customer ID : 
<input type="text"  name="txtCusID" required />
<input type="submit"  value="Click Me" />
</td>
</tr>
</table>
<hr />
<c:if test="${cust != null }">
<table width="100%" border="1">
<tr>
<td style="text-align:center">
<b>Customer ID : </b> ${cust.cusid }<br />
<b>Customer Name : </b> ${cust.cusname }<br />
<b>Gender : </b> ${cust.gender }<br />
<b>Location : </b> ${cust.location }<br />
<b>Email : </b> ${cust.email }<br />
<b>Password : </b> ${cust.pasword }<br />
</td>
</tr>
</table>
</c:if>

<c:if test="${cust == null }">
<h2>${msg }</h2>
</c:if>
</form>

</body>
</html>