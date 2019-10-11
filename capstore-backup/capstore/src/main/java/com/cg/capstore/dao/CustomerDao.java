package com.cg.capstore.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cg.capstore.bean.Customer;

public interface CustomerDao extends JpaRepository<Customer,String>{
	@Query("select email from Customer")
	public List<String> allEmail();
	@Query("from Customer where email=:email")
	public Customer getCustomerByEmail(@Param("email") String email);
}
