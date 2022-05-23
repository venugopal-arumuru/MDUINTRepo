<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</head>
<body class="bg-info">

<form name="f1"  method="POST"  action="addcustomer">
<div class="container-fluid">
<div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">
	<div class="card">
		<div class="card-header">Add New Customer</div>
	</div>
	<div class="card-body">
	<label>Customer Name</label>
	<input type="text"  name="txtCname" class="form-control" required />
	
	<label>Gender</label><br />
	<input type="radio"  class="form-check-input" name="rdoGender" value="Male" />Male
	<br />
	<input type="radio" class="form-check-input"  name="rdoGender" value="Female" />Female
	<br />
	<label>Location</label>
	<select name="ddlLoc" class="form-control">
			<option value="Hyderabad">Hyderabad</option>		
			<option value="Bangalore">Bangalore</option>
			<option value="Mumbai">Mumbai</option>
		</select>
		<label>Email</label>
		<input type="email"  name="txtEmail" class="form-control" required />
		<label>Password</label>
		<input type="text"  name="txtPass" class="form-control" required />
		<div class="row">
               <div class="col-md-12" style="text-align: center;">
                         <br />
                 <input type="submit"  value="Login" class="btn btn-primary" />
                                <input type="reset"  value="Clear All" class="btn btn-danger" />
                            </div>
         </div>
	</div>
</div>
<div class="col-md-3"></div>
</div>
</div>

</form>
</body>
</html>