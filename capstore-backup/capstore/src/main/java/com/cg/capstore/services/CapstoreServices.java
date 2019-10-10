package com.cg.capstore.services;

import java.util.List;

import com.cg.capstore.bean.Customer;
import com.cg.capstore.bean.Merchant;

public interface CapstoreServices {
 public void merchantSignup(Merchant merchant);
 public void customerSignup(Customer customer);
 public List<Merchant> viewAllMerchant();
 public List<Customer> viewAllCustomer();
 public Customer customerLogin(String email,String password);
 public Merchant merchantLogin(String email,String password);
}
