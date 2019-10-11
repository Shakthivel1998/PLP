package com.cg.capstore.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cg.capstore.bean.Merchant;

public interface MerchantDao extends JpaRepository<Merchant, String>{
	@Query("select email from Merchant")
	public List<String> allEmail();
	@Query("from Merchant where email=:email")
	public Merchant getMerchantByEmail(@Param("email")String email);
}
