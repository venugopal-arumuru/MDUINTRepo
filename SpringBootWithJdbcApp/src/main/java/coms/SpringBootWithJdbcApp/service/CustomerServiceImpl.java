package coms.SpringBootWithJdbcApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import coms.SpringBootWithJdbcApp.beans.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	JdbcTemplate  jt;
	
	@Override
	public String AddCustomer(Customer cus) {
		String result = "Error";
		String sql = "Insert into Customer(cusname, gender, location, email, pasword) values(?,?,?,?,?)";
		int res = jt.update(sql, new Object[] {cus.getCusname(), cus.getGender(), cus.getLocation(), cus.getEmail(), cus.getPasword()});
		if(res>=1)
			result = "Success";
		return result;
	}

	@Override
	public List<Customer> ShowAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Customer SearchCustomer(int cno) {
		// TODO Auto-generated method stub
		return null;
	}

}
