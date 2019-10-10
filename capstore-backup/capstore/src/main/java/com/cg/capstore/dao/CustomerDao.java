package com.cg.capstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.capstore.bean.Customer;

public interface CustomerDao extends JpaRepository<Customer,String>{

}
