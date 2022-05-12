package coms.SpringBootWithJdbcApp.service;
import coms.SpringBootWithJdbcApp.beans.*;
import java.util.*;
public interface CustomerService {
	public String AddCustomer(Customer cus);
	public List<Customer>  ShowAll();
	public Customer  SearchCustomer(int cno);
}
