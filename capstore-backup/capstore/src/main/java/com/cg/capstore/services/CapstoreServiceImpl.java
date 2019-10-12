package com.cg.capstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.capstore.bean.Customer;
import com.cg.capstore.bean.Merchant;
import com.cg.capstore.dao.CustomerDao;
import com.cg.capstore.dao.MerchantDao;
import com.cg.capstore.exceptions.CustomExceptions;

@Service
public class CapstoreServiceImpl implements CapstoreServices {
	@Autowired
	CustomerDao customerDao;
	@Autowired
	MerchantDao merchantDao;

	final String secret = "ssshhhhhhhhhhh!!!!";

	@Override
	public Merchant merchantSignup(Merchant merchant) throws CustomExceptions {
		boolean exists = true;
		for (String s : merchantDao.allEmail()) {
			if (s.equals(merchant.getEmail())) {
				System.out.println(merchant.getEmail());
				exists = false;
			}
		}
		if (!exists) {
			throw new CustomExceptions("Email id already exists");
		}
		Merchant loader = new Merchant();
		loader = merchant;
		loader.setPassword(passwordEncrypt(merchant.getPassword()));
		merchantDao.save(loader);
		return loader;
	}

	@Override
	public Customer customerSignup(Customer customer) throws CustomExceptions {
		boolean exists = true;
		for (String s : customerDao.allEmail()) {
			if (s.equals(customer.getEmail())) {
				System.out.println(customer.getEmail());
				exists = false;
			}
		}
		System.out.println(exists);

		if (!exists) {
			throw new CustomExceptions("Email id already exists");
		}

		Customer loader = new Customer();
		loader = customer;
		loader.setPassword(passwordEncrypt(customer.getPassword()));
		customerDao.save(loader);
		return loader;
	}

	@Override
	public Customer customerLogin(String email, String password) throws CustomExceptions {
		Customer customer = customerDao.getCustomerByEmail(email);
		System.out.println(customer.toString());
		String enycryptPassword= passwordEncrypt(password);
		if(!customer.getPassword().equals(enycryptPassword)) {
			throw new CustomExceptions("Invalid user");
		}
		return customer;		
	}

	@Override
	public Merchant merchantLogin(String email, String password) throws CustomExceptions {
		Merchant merchant = merchantDao.getMerchantByEmail(email);
		String encryptPassword = passwordEncrypt(password);
		if(!merchant.getPassword().equals(encryptPassword)) {
			throw new CustomExceptions("Invalid user");
		}
		
		return merchant;
	}

	@Override
	public List<Merchant> viewAllMerchant() {
		return merchantDao.findAll();
	}

	@Override
	public List<Customer> viewAllCustomer() {
		return customerDao.findAll();
	}

	@Override
	public String passwordEncrypt(String password) {

		String encrypted = AES.encrypt(password, secret);
		return encrypted;
	}

	@Override
	public String passwordDecrypt(String password) {
		String decrypted = AES.decrypt(passwordEncrypt(password), secret);
		return decrypted;
	}

	@Override
	public boolean validatecusomer(String email) throws CustomExceptions {
		Customer customer=null;
		customer=customerDao.getCustomerByEmail(email);
		if(customer==null) {
			throw new CustomExceptions("email does not exists..");
		}
		customer.setActive(true);
		customerDao.save(customer);
		return true;
	}

}
