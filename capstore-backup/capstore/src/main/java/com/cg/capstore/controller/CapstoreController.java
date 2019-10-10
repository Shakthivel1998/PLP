package com.cg.capstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.capstore.bean.Customer;
import com.cg.capstore.bean.Merchant;
import com.cg.capstore.services.CapstoreServices;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CapstoreController {
@Autowired
CapstoreServices capstoreServices;
@PostMapping("/merchantsignup")
public void merchantSignup(@RequestBody Merchant merchant) {
	capstoreServices.merchantSignup(merchant);
}
@RequestMapping("/allmerchants")
public List<Merchant> getmerchent() {
	return capstoreServices.viewAllMerchant();	
}
@PostMapping("/customersignup")
public void customersignup(@RequestBody Customer customer) {
	capstoreServices.customerSignup(customer);
}
@RequestMapping("/allcustomer")
public List<Customer> getCustomer(){
	return capstoreServices.viewAllCustomer();
}
}
