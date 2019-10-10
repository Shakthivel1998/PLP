package com.cg.capstore.bean;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.Type;

@Entity
public class Merchant {
	

		@Id
		@SequenceGenerator(name = "merch_id", sequenceName = "merch_id", initialValue = 30000, allocationSize = 1)
		@GeneratedValue(generator = "merch_id")
		private int merchantId;
		private String firstName;
		private String lastName;
		private String email;
		private String storeName;
		private String phone;
		private String password;
		private double revenue;
		@Type(type= "org.hibernate.type.NumericBooleanType")
		private boolean isActive;
		@OneToMany
		private List<Product> products = new ArrayList<Product>();

		public Merchant() {
			super();
		}

		public Merchant(int merchantId, String firstName, String lastName, String email, String storeName, String phone,
				String password, double revenue, List<Product> products) {
			super();
			this.merchantId = merchantId;
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.storeName = storeName;
			this.phone = phone;
			this.password = password;
			this.revenue = revenue;
			this.products = products;
		}

		public int getMerchantId() {
			return merchantId;
		}

		public void setMerchantId(int merchantId) {
			this.merchantId = merchantId;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getStoreName() {
			return storeName;
		}

		public void setStoreName(String storeName) {
			this.storeName = storeName;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public double getRevenue() {
			return revenue;
		}

		public void setRevenue(double revenue) {
			this.revenue = revenue;
		}

		public List<Product> getProducts() {
			return products;
		}

		public void setProducts(List<Product> products) {
			this.products = products;
		}

		public boolean isActive() {
			return isActive;
		}

		public void setActive(boolean isActive) {
			this.isActive = isActive;
		}
		

	}

	

