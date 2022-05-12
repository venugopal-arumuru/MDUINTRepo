<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
	table{
		margin-left: auto;
		margin-right: auto;
	}
</style>
</head>
<body>
<h1 style="text-align:center">Add New Customer</h1>
<hr />
<form name="f1"  method="POST"  action="addcustomer">
<table width="40%" border=1>
	<tr>
	<td>Customer Name :</td>
	<td><input type="text"  name="txtCname" required /></td>
	</tr>

	<tr>
	<td>Gender :</td>
	<td><input type="radio"  name="rdoGender" value="Male" />Male
	<br />
	<input type="radio"  name="rdoGender" value="Female" />Female</td>
	</tr>

	<tr>
	<td>Location :</td>
	<td>
		<select name="ddlLoc">
			<option value="Hyderabad">Hyderabad</option>		
			<option value="Bangalore">Bangalore</option>
			<option value="Mumbai">Mumbai</option>
		</select>
	</td>
	</tr>
	
	<tr>
	<td>Email :</td>
	<td><input type="email"  name="txtEmail" required /></td>
	</tr>
	
	<tr>
	<td>Password :</td>
	<td><input type="text"  name="txtPass" required /></td>
	</tr>
	
	<tr>
	<td>
		<input type="submit"  value="Add Customer" />
	</td>
	<td><input type="reset"  value="Clear All" /></td>
	</tr>
	
	<tr>
	<td colspan="2"><h2>${res }</h2></td>	
	</tr>
</table>
</form>
</body>
</html>