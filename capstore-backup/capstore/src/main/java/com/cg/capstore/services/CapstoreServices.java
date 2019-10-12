package com.cg.capstore.services;

import java.util.List;

import com.cg.capstore.bean.Customer;
import com.cg.capstore.bean.Merchant;
import com.cg.capstore.exceptions.CustomExceptions;

public interface CapstoreServices {
 public Merchant merchantSignup(Merchant merchant) throws CustomExceptions;
 public Customer customerSignup(Customer customer) throws CustomExceptions;
 public List<Merchant> viewAllMerchant();
 public List<Customer> viewAllCustomer();
 public Customer customerLogin(String email,String password) throws CustomExceptions;
 public Merchant merchantLogin(String email,String password) throws CustomExceptions;
 public String passwordEncrypt(String password);
 public String passwordDecrypt(String password);
 public boolean validatecusomer(String email) throws CustomExceptions;
}
