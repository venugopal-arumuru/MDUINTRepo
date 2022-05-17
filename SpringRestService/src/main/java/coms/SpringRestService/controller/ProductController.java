package coms.SpringRestService.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import coms.SpringRestService.model.Product;

@RestController
public class ProductController {

	private static Map<Integer, Product> productRepo = new HashMap<Integer, Product>();
	
	static {  // static constructor
	      Product mobile = new Product();
	      mobile.setId(1);
	      mobile.setName("IPhone");
	      mobile.setStock(100);
	      productRepo.put(mobile.getId(), mobile);
	      
	      Product laptop = new Product();
	      laptop.setId(2);
	      laptop.setName("HP Laptop");
	      laptop.setStock(50);
	      productRepo.put(laptop.getId(), laptop);
	   }
	
	@GetMapping(value="/product")
	 public ResponseEntity<Object> getProducts() {
		   System.out.println("res come");
	      return new ResponseEntity(productRepo.values(), HttpStatus.OK);
	   }
	
	 	@PostMapping(value = "/product")
	   public ResponseEntity<Object> createProduct(@RequestBody Product product) {
	      productRepo.put(product.getId(), product);
	      return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
	   }
	 	
	 	 @GetMapping(value = "/product/{id}")
		 public ResponseEntity<Object> getOneProduct(@PathVariable Integer id) {
			  if(productRepo.containsKey(id))
				  return new ResponseEntity<>((Product)productRepo.get(id), HttpStatus.OK);
			  else
				  return new ResponseEntity<>("Product Not Found", HttpStatus.OK);
		   }
	 	 
	 	 @DeleteMapping(value = "/product/{id}")
		   public ResponseEntity<Object> delete(@PathVariable Integer id) { 
		      productRepo.remove(id);
		      return new ResponseEntity<>("Product is deleted successsfully", HttpStatus.OK);
		   }
	 	 
	 	  @PutMapping(value = "/product/{id}")
		   public ResponseEntity<Object> updateProduct(@PathVariable Integer id, @RequestBody Product product) { 
		      productRepo.remove(id);
		      product.setId(id);
		      productRepo.put(id, product);
		      return new ResponseEntity<>("Product is updated successsfully", HttpStatus.OK);
		   }
	 	 
}
