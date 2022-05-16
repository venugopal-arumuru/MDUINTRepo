package coms.SpringBootWithJdbcApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import coms.SpringBootWithJdbcApp.beans.Customer;
import coms.SpringBootWithJdbcApp.service.CustomerService;

@Controller
public class CustomerController {

	@Autowired
	CustomerService cs;
	
	
	@GetMapping("addc")
	public String NewCustomer()
	{		
		return "AddNewCustomer";
	}
	@PostMapping("addcustomer")
	public String NewCustomer(@RequestParam String txtCname,
			@RequestParam String rdoGender,
			@RequestParam String ddlLoc,
			@RequestParam String txtEmail,
			@RequestParam String txtPass, Model m)
	{
		//System.out.println(txtCname + "," + rdoGender + "," + ddlLoc + "," + txtEmail + "," + txtPass);
		
		Customer cust = new Customer();
		cust.setCusname(txtCname);
		cust.setGender(rdoGender);
		cust.setLocation(ddlLoc);
		cust.setEmail(txtEmail);
		cust.setPasword(txtPass);
		String res = cs.AddCustomer(cust);
		
		m.addAttribute("res", res);
		
		return "AddNewCustomer";
	}
	
	@GetMapping("showall")
	public String GetAllCustomer(Model m)
	{
		List<Customer>  allcustomers = cs.ShowAll();
		m.addAttribute("allcus", allcustomers);
		return "ViewAllCustomers";
	}
	
	@GetMapping("getcus")
	public String GetCustomer()
	{		
		return "SearchCustomer";
	}
	
	@PostMapping("SearchProcess")
	public String GetCustomer(@RequestParam String txtCusID, Model m)
	{
		int cno = Integer.parseInt(txtCusID);
		Customer customer =  cs.SearchCustomer(cno);
		
		if(customer!=null)
			m.addAttribute("cust", customer);
		else
			m.addAttribute("msg", "Customer Not Found");
		
		return "SearchCustomer";
	}
}
