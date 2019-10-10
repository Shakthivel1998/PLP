package com.cg.capstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.capstore.bean.Customer;
import com.cg.capstore.bean.Merchant;
import com.cg.capstore.dao.CustomerDao;
import com.cg.capstore.dao.MerchantDao;
@Service
public class CapstoreServiceImpl implements CapstoreServices{
@Autowired
CustomerDao customerDao;
@Autowired
MerchantDao merchantDao;

	@Override
	public void merchantSignup(Merchant merchant) {
		merchantDao.save(merchant);
	}

	@Override
	public void customerSignup(Customer customer) {
		customerDao.save(customer);
	}

	@Override
	public Customer customerLogin(String email, String password) {
		return null;
	}

	@Override
	public Merchant merchantLogin(String email, String password) {
		return null;
	}

	@Override
	public List<Merchant> viewAllMerchant() {
		return  merchantDao.findAll();
	}

	@Override
	public List<Customer> viewAllCustomer() {
		return customerDao.findAll();
	}

}
