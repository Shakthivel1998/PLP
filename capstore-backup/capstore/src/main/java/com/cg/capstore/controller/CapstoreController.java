package com.cg.capstore.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.capstore.bean.Customer;
import com.cg.capstore.bean.Merchant;
import com.cg.capstore.exceptions.CustomExceptions;
import com.cg.capstore.services.CapstoreServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class CapstoreController {
@Autowired
CapstoreServices capstoreServices;
@PostMapping("/merchantsignup")
public boolean merchantSignup(@RequestBody Merchant merchant) {
	try {
		capstoreServices.merchantSignup(merchant);
		return true;
	} catch (CustomExceptions e) {
		e.printStackTrace();
	}
	return false;
}
@RequestMapping("/allmerchants")
public List<Merchant> getmerchent() {
	return capstoreServices.viewAllMerchant();	
}
@PostMapping("/customersignup")
public boolean customersignup(@RequestBody Customer customer) {
		try {
			capstoreServices.customerSignup(customer);
			return true;
		} catch (CustomExceptions e) {
			e.printStackTrace();
		}
		return false; 
	}
@RequestMapping("/allcustomer")
public List<Customer> getCustomer(){
	return capstoreServices.viewAllCustomer();
}

@PostMapping("/customerlogin")
public  ResponseEntity<Map<String,String>>  customerLogin(@RequestParam String email, @RequestParam String password) {
	
	Map<String,String> res = new HashMap<>();
	try {
		Customer customer = capstoreServices.customerLogin(email, password);
		res.put("email", email);
		res.put("CustomerID",String.valueOf(customer.getCustomerId()));
		res.put("role", "customer");
		res.put("isActive", String.valueOf(customer.isActive()));
		return new ResponseEntity<>(res,HttpStatus.OK);
	} catch (CustomExceptions e) {
		e.printStackTrace();
		res.put("error", "Email not found");
	}
	return new ResponseEntity<>(res,HttpStatus.NOT_FOUND);
}
@PostMapping("/merchantlogin")
public ResponseEntity<Map<String,String>>merchantLogin(@RequestParam String email, @RequestParam String password) {
	Map<String,String> res = new HashMap<>();
	try {
		Merchant merchant = capstoreServices.merchantLogin(email, password);
		res.put("email", email);
		res.put("merchantId",String.valueOf(merchant.getMerchantId()));
		res.put("role", "merchant");
		res.put("isActive", String.valueOf(merchant.isActive()));
		return new ResponseEntity<>(res,HttpStatus.OK);
	} catch (CustomExceptions e) {
		e.printStackTrace();
		res.put("error", "Email not found");
	}
	return new ResponseEntity<>(res,HttpStatus.NOT_FOUND);
}

@PutMapping("/validateuser")
public boolean validateUser(@RequestParam String email) {
	try {
		return capstoreServices.validatecusomer(email);
	} catch (CustomExceptions e) {
		e.printStackTrace();
	}
	return false;
}
@GetMapping("/change/{mailId}")
public Customer getEmailId(@PathVariable("mailId") String mailId) throws CustomExceptions {
	System.out.println(mailId);
	return capstoreServices.mailidCheck(mailId);
}

@GetMapping("/reset/{newpwd}/{mailId}")
public Customer updatePassword(@PathVariable("newpwd") String newpwd, @PathVariable("mailId") String mailId)
		throws CustomExceptions {
	System.out.println(newpwd + mailId);
	return capstoreServices.updatePassword(newpwd, mailId);
}

@GetMapping("/check/{mailId}")
public Customer checkEmailId(@PathVariable("mailId") String mailId) throws CustomExceptions {
	System.out.println(mailId);
	return capstoreServices.mailidCheck(mailId);
}

@GetMapping("/merchantchange/{email}")
public Merchant getMerchantEmailId(@PathVariable("email") String email) throws CustomExceptions {
	System.out.println(email);
	return capstoreServices.merchantMailIdCheck(email);
}

@GetMapping("/resetMerchant/{newpwd}/{email}")
public Merchant updateMerchantPassword(@PathVariable("newpwd") String newpwd, @PathVariable("email") String email)
		throws CustomExceptions {
	System.out.println(email + newpwd);
	return capstoreServices.updateMerchantPassword(newpwd, email);
}

@GetMapping("/checkMerchant")
public Merchant checkMerchantEmail(@RequestParam("email") String email) throws CustomExceptions {
	return capstoreServices.checkMerchantEmail(email);
}

	/*
	 * @PostMapping("/merchantlogin") public boolean merchantLogin(@RequestParam
	 * String email, @RequestParam String password) { try {
	 * capstoreServices.merchantLogin(email, password); return true; } catch
	 * (CustomExceptions e) { e.printStackTrace(); } return false; }
	 */
}
