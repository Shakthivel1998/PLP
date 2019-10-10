package com.cg.capstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.capstore.bean.Merchant;

public interface MerchantDao extends JpaRepository<Merchant, String>{

}
